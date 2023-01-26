import Repo from "./Repo";

function Repos({ repos }){

  return (
    <div className="reposContainer">
      {repos.map((repo) => (
        <div key={repo.id}>
          <Repo repo={repo} />
        </div>
      ))};
    </div>
  );
};

export default Repos
