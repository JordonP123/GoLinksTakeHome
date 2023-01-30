import Repo from "./Repo";
import "./Styles/repo.css";

function Repos({ repos }) {
  return (
    <div className="reposContainer">
      <h2 className="headerForRepoCotnainer">Repositories</h2>
      {repos.map((repo, index) => (
        <div key={repo.id}>
          <Repo repo={repo} index={index} />
        </div>
      ))}
    </div>
  );
}

export default Repos;
