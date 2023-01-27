import Repos from "./Repos";
import ProfileInfo from "./ProfileInfo";
import "./Styles/displayPage.css";

function DisplayPage({ repos }) {
  return (
    <div className="displayPageContainer">
      <ProfileInfo repos={repos} />
      <Repos repos={repos} />
    </div>
  );
}

export default DisplayPage;
