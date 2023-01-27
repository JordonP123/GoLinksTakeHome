import "./Styles/repo.css";
import { Link } from 'react-router-dom'

function Repo({ repo, index }) {
  const newDate = new Date(repo.created_at).toLocaleDateString();

  return (
    <>
      <div className="repoContainer">
        <Link to={`commits/${index}`}>
        <h2>{repo.name}</h2>
        </Link>
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
