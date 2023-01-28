import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Commit from "./Commit";
import Loading from "./Loading";
import "./Styles/commit.css";

function Commits({ repos }) {
  const [commits, setCommits] = useState([]);
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
        }
      };

      getCommitsData().catch((err) => console.error({ err }));
    },
    [repos, id],
    []
  );

  return commits.length ? (
    <div className="commitsContainer">
      <div className="commitsHeader">
        <h2 className="commitsTitle">Commits</h2>
        <div className="sortByContainer">
          <p className="sortByHeading">Sort by</p>
          <i class="fa-solid fa-sort-down"></i>
        </div>
      </div>
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
