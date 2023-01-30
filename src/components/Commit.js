import "./Styles/commit.css";

function Commit({ commit }) {
  return (
    <div className="commitContainer">
      <div className="messageContainer">{commit.commit.message}</div>
      <div className="dateNameHashContainer">
        <div className="dateNameContainer">
          <div className="nameContainer">
            <i className="fa-regular fa-user"></i>{" "}
            <p>{commit.author ? commit.author.login : commit.commit.author.name}</p>
          </div>
          <div className="dateContainer">
            <i className="fa-regular fa-calendar"></i>{" "}
            <p>{new Date(commit.commit.author.date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="shaContainer">
          <i className="fa-brands fa-dashcube"></i> <p>{commit.sha}</p>
        </div>
      </div>
    </div>
  );
}

export default Commit;
