import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ setRepoName }) {
  const [inputValue, setInputValue] = useState('')

  const onChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRepoName(inputValue)
    setInputValue('')
  }

  return (
    <div className="headerContainer">
      <Link to="/">
        <i className="fa-brands fa-github-alt gitHubLogo"></i>
      </Link>
      <form className="formContainer" onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={onChange}
        className="searchBar"
        type="text"
        placeholder="Search for a new repo..."
      />
      </form>
    </div>
  );
}

export default Header;
