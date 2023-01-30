import { useState, useEffect } from "react";
import "./reset.css";
import "./components/Styles/globalStyles.css";
import DisplayPage from "./components/DisplayPage";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Commits from "./components/Commits";
import { Route, Routes } from "react-router-dom";

function App() {
  const [repos, setRepos] = useState([]);
  const [repoName, setRepoName] = useState("Netflix");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(
    () => {
      const getData = async () => {
        const data = await fetch(
          `https://api.github.com/orgs/${repoName}/repos`
        );
        const newData = await data.json();
          newData.sort((a, b) => {
            return b.stargazers_count - a.stargazers_count;
          });
          setRepos(newData);
          setErrorMessage("");
      };

      getData().catch((err) => {
        setErrorMessage(`${repoName} does not exist`)
        console.error({ err });
      });
    },
    [repoName],
    []
  );

  return repos.length ? (
    <>
      <Header setRepoName={setRepoName} errorMessage={errorMessage} />
      <Routes>
        <Route
          exact
          path="/"
          element={<DisplayPage repoName={repoName} repos={repos} />}
        />
        <Route path="/commits/:id" element={<Commits repos={repos} />} />
      </Routes>
    </>
  ) : (
    <Loading />
  );
}

export default App;
