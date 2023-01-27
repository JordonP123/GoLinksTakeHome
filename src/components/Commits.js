import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Commit from "./Commit";
import Loading from './Loading'

function Commits({ repos }) {
  const [commits, setCommits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCommitsData = async () => {
      const data = await fetch(
        `https://api.github.com/repos/${repos[id].owner.login}/${repos[id].name}/commits`
      );
      const newData = await data.json();
        if(Array.isArray(newData)){
          setCommits(newData);
        }
    };

    getCommitsData()
    .catch((err) => console.error({ err }));
  }, [repos, id], []); 

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
