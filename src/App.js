import { useState, useEffect } from 'react'
import "./reset.css";
import DisplayPage from './components/displayPage/DisplayPage'
import Header from "./components/Header/Header";
import Loading from './components/loadingScreen/Loading'

function App() {

  const [repos, setRepos] = useState([])

  useEffect(() => {
      const getData = async () => {
        const data = await fetch('https://api.github.com/orgs/Netflix/repos')
        const newData = await data.json()

        newData.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count
        })

        setRepos(newData)
      }
  
      getData()
  
      .catch(err => console.error({ err }))
    }, [])

    
  return (
    repos.length ? 
    <>
      <Header />
      <DisplayPage repos={repos} /> 
    </> : <Loading/>
  );
}

export default App;
