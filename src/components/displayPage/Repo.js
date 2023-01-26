import "./repo.css";

function Repo({ repo }) {

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
      <div className="repoContainer">{repo.id}</div>
    </>
  );
}

export default Repo;
