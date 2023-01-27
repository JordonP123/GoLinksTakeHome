import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Commit from "./Commit";
import Loading from '../loadingScreen/Loading'

function Commits({ repos }) {
  const [commits, setCommits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCommitsData = async () => {
      const data = await fetch(
        `https://api.github.com/repos/Netflix/${repos[id].name}/commits`
      );
      const newData = await data.json();
      setCommits(newData);
    };

    getCommitsData().catch((err) => console.error({ err }));
  }, [id]); //eslint-disable-line

  console.log(commits);

  return (
    commits.length ? 
    <>
      {commits.map((commit) => (
        <div key={commit.sha}>
          <Commit commit={commit} />
        </div>
      ))}
    </> : <Loading/>
  );
}

export default Commits;
