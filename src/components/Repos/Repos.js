import { useGetAndSortData } from "../../customHooks/getAndSortDataHook";
import Repo from "./Repo";

function Repos(){
  const repos = useGetAndSortData(); //not gonna reuse, just makes things cleaner :D

  console.log(repos);

  /*
  
  - Repo name 
  - Language 
  - Description 
  - Star Count 
  - Fork Count 
  - Date Created 
  
  */

  return (
    <>
      {repos.map((repo) => (
        <div key={repo.id}>
          <Repo repo={repo} />
        </div>
      ))};
    </>
  );
};

export default Repos
