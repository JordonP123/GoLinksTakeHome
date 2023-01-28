import Repo from "./Repo";
import "./Styles/repo.css";

function Repos({ repos }) {
  return (
    <div className="reposContainer">
      {repos.map((repo, index) => (
        <div key={repo.id}>
          <Repo repo={repo} index={index} />
        </div>
      ))}
      ;
    </div>
  );
}

export default Repos;
