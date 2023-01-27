import './profileInfo.css'
import { useEffect, useState } from 'react'

function ProfileInfo({ repoName }){
    const [profileData, setProfileData] = useState({})

    useEffect(() => {
        const getProfileData = async() => {
            const data = await fetch(`https://api.github.com/users/${repoName}`)
            const newData = await data.json()

            setProfileData(newData)
        }
        
        getProfileData()
    }, [repoName])
    

    if(!profileData) return <>No data for this guy :D </>

    return (
        <div className='profileContainer'>
        <img className="avatarImg" src={profileData.avatar_url} alt='avatar'></img>
        <h2 className='profileName'>{profileData.name}</h2>
        <p>{profileData.bio}</p>
        <p>{profileData.followers}{' '}{profileData.following}</p>
        <p>Location: {profileData.location}</p>
        {profileData.email && <p>Email: {profileData.email}</p>} 
        </div>
    )
}

export default ProfileInfo