import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Commit from "./Commit";
import Loading from "./Loading";
import "./Styles/commit.css";

function Commits({ repos }) {
  const [commits, setCommits] = useState([]);
  const [reversedCommits, setReversedCommits] = useState([]);
  const [normalCommits, setNormalCommits] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [mostRecent, setMostRecent] = useState(true);
  const { id } = useParams();

  useEffect(
    () => {
      const getCommitsData = async () => {
        const data = await fetch(
          `https://api.github.com/repos/${repos[id].owner.login}/${repos[id].name}/commits`
        );
        const newData = await data.json();
        if (Array.isArray(newData)) {
          setCommits(newData);
          setNormalCommits(newData);
          setReversedCommits([...newData].reverse());
        }
      };

      getCommitsData().catch((err) => console.error({ err }));
    },
    [repos, id],
    []
  );

  useEffect(() => {
    if (mostRecent) setCommits(normalCommits);
    else setCommits(reversedCommits);

    setShowDropDown(false)
  }, [mostRecent, commits, reversedCommits, normalCommits]);

  return commits.length ? (
    <div className="commitsContainer">
      <div className="commitsHeader">
        <h2 className="commitsTitle">Commits</h2>
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className="sortByContainer"
        >
          <p className="sortByHeading">Sort</p>
          <i className="fa-solid fa-sort-down"></i>
        </div>
      </div>
      {showDropDown && (
        <div className="dropDownContainer">
          <h3 className="dropDownHeader">Select Order</h3>
          <div
            onClick={() => setMostRecent(true)}
            className="dropDownSelection mostRecentSelection"
          >
           <p>Most Recent</p>
          {mostRecent && <i className="fa-solid fa-check"></i>}
          </div>
          <div
            onClick={() => setMostRecent(false)}
            className="dropDownSelection"
          >
            <p>Oldest</p>
            {!mostRecent && <i className="fa-solid fa-check"></i>}
          </div>
        </div>
      )}
      {commits.map((commit) => (
        <div key={commit.sha}>
          <Commit commit={commit} />
        </div>
      ))}
    </div>
  ) : (
    <Loading />
  );
}

export default Commits;
