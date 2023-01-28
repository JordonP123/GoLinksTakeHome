import "./Styles/profileInfo.css";

function ProfileInfo({ repos }) {
  return (
    <div className="profileContainer">
      <img
        className="avatarImg"
        src={repos[0].owner.avatar_url}
        alt="avatar"
      ></img>
      <h2 className="profileName">{repos[0].owner.login}</h2>
    </div>
  );
}

export default ProfileInfo;
