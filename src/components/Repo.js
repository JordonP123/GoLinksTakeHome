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
            <h2>{repo.name}</h2>
          </Link>
          <p className="leftSideContent">
            <i class="fa-solid fa-code"></i> {repo.language}
          </p>
          <p className="leftSideContent">Created on {newDate}</p>
        </div>
        <div className="showDescriptionButtonContainer">
          <i
            class={
              !showDescription
                ? "fa-solid fa-angle-down showDescriptionButton"
                : "fa-solid fa-angle-up showDescriptionButton"
            }
            onClick={onClick}
          ></i>
        </div>
        <div className="forkAndStarContainer">
          <p><i class="fa-regular fa-star"></i>{' '}{repo.stargazers_count}</p>
          <p><i class="fa-solid fa-code-fork"></i>{' '}{repo.forks_count}</p>
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
