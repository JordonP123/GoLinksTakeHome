import Repos from './Repos'
import ProfileInfo from './ProfileInfo'
import './displayPage.css'


function DisplayPage({ repos }){

    return(
        <div className='displayPageContainer'>
        <ProfileInfo/>
        <Repos repos={repos}/>
        </div>
    ) 
}

export default DisplayPage