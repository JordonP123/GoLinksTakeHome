import { useState, useEffect } from 'react'


export const useGetAndSortData = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const getData = async () => {
          const data = await fetch('https://api.github.com/orgs/Netflix/repos')
          const newData = await data.json()

          console.log(repos)
    
          setRepos(newData)
        }
    
        getData()
    
        .catch(err => console.error({ err }))
      }, []) //eslint-disable-line

      return repos.sort((a, b) => {
        return b.stargazers_count - a.stargazers_count
      })

}