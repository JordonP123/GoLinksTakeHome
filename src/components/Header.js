import "./Styles/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ setRepoName, errorMessage }) {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRepoName(inputValue);
    setInputValue("");
  };

  return (
    <div className="headerContainer">
      <Link className="gitHubLogoContainer" to="/">
        <i className="fa-brands fa-github-alt gitHubLogo"></i>
      </Link>
      <div className="formContainer">
      <form className="formContainer" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={onChange}
          className="searchBar"
          type="text"
          placeholder="Search for a new repo..."
          />
      </form>
          <p className="errorMessage">{errorMessage}</p>
          </div>
    </div>
  );
}

export default Header;
