import SearchBar from './SearchBar'
import './header.css'

function Header(){

    return(
        <div className="headerContainer">
            <i class="fa-brands fa-github-alt gitHubLogo"></i>
            <SearchBar/>
        </div>
    )
}

export default Header