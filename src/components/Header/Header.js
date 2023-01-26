import SearchBar from './SearchBar'
import './header.css'

function Header(){

    return(
        <div className="headerContainer">
            <i className="fa-brands fa-github-alt gitHubLogo"></i>
            <SearchBar/>
        </div>
    )
}

export default Header