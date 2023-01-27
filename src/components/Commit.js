import './Styles/commit.css'

function Commit({ commit }){
    return(
        <div className="commitContainer">
        <p>Message: {commit.commit.message}</p>
        <p>Hash: {commit.sha}</p>
        <p>Date: {commit.commit.author.date}</p>
        <p>{commit.author ? `Username: ${commit.author.login}` : `Name: ${commit.commit.author.name}`}</p>
        </div>
    )
}

export default Commit