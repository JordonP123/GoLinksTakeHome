import "./Styles/commit.css";

function Commit({ commit }) {
  return (
    <div className="commitContainer">
      <div className="messageContainer">{commit.commit.message}</div>
      <div className="dateNameHashContainer">
        <div className="dateNameContainer">
          <div className="nameContainer">
            <i class="fa-regular fa-user"></i>{" "}
            {commit.author ? commit.author.login : commit.commit.author.name}
          </div>
          <div className="dateContainer">
            <i class="fa-regular fa-calendar"></i>{" "}
            {new Date(commit.commit.author.date).toLocaleDateString()}
          </div>
        </div>
        <div className="shaContainer">
          <i class="fa-brands fa-dashcube"></i> {commit.sha}
        </div>
      </div>
    </div>
  );
}

export default Commit;
