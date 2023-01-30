import { useState, useRef } from "react";
import "./Styles/repo.css";
import { Link } from "react-router-dom";

function Repo({ repo, index }) {
  const [showDescription, setShowDescription] = useState(false);
  const id = useRef();
  const newDate = new Date(repo.created_at).toLocaleDateString();

  const onClick = () => {
    id.current = repo.id;
    setShowDescription(!showDescription);
  };

  return (
    <>
      <div className="repoContainer">
        <div className="leftSideContainer">
          <Link to={`commits/${index}`}>
            <h2 className="repoName">{repo.name}</h2>
          </Link>
          <p className="leftSideContent">
            <i className="fa-solid fa-code hoverEmojis"></i> {repo.language}
          </p>
          <p className="leftSideContent">Created on {newDate}</p>
        </div>
        <div className="showDescriptionButtonContainer">
          <i
            className={
              !showDescription
                ? "fa-solid fa-angle-down showDescriptionButton hoverEmojis"
                : "fa-solid fa-angle-up showDescriptionButton hoverEmojis"
            }
            onClick={onClick}
          ></i>
        </div>
        <div className="forkAndStarContainer">
          <div className="starsContainer">
            <i className="fa-regular fa-star hoverEmojis"></i>
            <p>{repo.stargazers_count}</p>
          </div>
          <div className="forksContainer">
            <i className="fa-solid fa-code-fork hoverEmojis"></i>
            <p>{repo.forks_count}</p>
          </div>
        </div>
      </div>
      <div className="descriptionContainer">
        {showDescription && id.current === repo.id ? (
          <p className="repoDescription">{repo.description}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Repo;
