import { useState, useEffect } from 'react'
import "./reset.css";
import DisplayPage from './components/displayPage/DisplayPage'
import Header from "./components/Header/Header";
import Loading from './components/loadingScreen/Loading'
import Commits from './components/displayPage/Commits'
import { Route, Routes } from "react-router-dom";


function App() {

  const [repos, setRepos] = useState([])
  const [repoName, setRepoName] = useState('Netflix')
  const [updateProfile, setUpdateProfile] = useState(true)

  useEffect(() => {
      const getData = async () => {
        const data = await fetch(`https://api.github.com/orgs/${repoName}/repos`)
        const newData = await data.json()

        newData.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count
        })
        setUpdateProfile(true)
        setRepos(newData)
      }
  
      getData()
  
      .catch(err => {
        setUpdateProfile(false)
        // setRepoName('Netflix')
        console.error({ err })}
        )
    }, [repoName])

    if(updateProfile === false)return <>This profile does not exists! :D</>
    
  return (
    repos.length ? 
    <>
      <Header setRepoName={setRepoName} repoName={repoName} />
      <Routes>
      <Route exact path='/' element={<DisplayPage repoName={repoName} repos={repos} />}/>
      <Route path='/commits/:id' element={<Commits repos={repos}/>}/>
      </Routes>
    </> : <Loading/>
  );
}

export default App;
