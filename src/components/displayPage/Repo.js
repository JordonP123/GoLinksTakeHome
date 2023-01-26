import "./repo.css";
import Commits from "./Commits";

function Repo({ repo }) {
  
  const newDate = new Date().toLocaleString("en-US", repo.created_at);

  return (
    <>
      <div className="repoContainer">
        <h2>{repo.name}</h2>
        <p>{repo.language}</p>
        <p>{repo.description}</p>
        <p>{repo.stargazers_count}</p>
        <p>{repo.forks_count}</p>
        <p>{newDate}</p>
      </div>
    </>
  );
}

export default Repo;
