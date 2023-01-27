import Repos from "./Repos";
import ProfileInfo from "./ProfileInfo";
import "./displayPage.css";

function DisplayPage({ repos, repoName }) {
  return (
    <div className="displayPageContainer">
      <ProfileInfo repoName={repoName} />
      <Repos repos={repos} />
    </div>
  );
}

export default DisplayPage;
