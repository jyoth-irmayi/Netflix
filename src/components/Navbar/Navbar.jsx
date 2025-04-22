import React from 'react'
import './Navbar.css'
import NetflixLogo from "../../assets/NetflixLogo.jsx";
import SearchIcon from "../../assets/search-icon";
import Bellicon from "../../assets/notificatoin";
import Netflixavatar from "../../assets/Netflix-avatar"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
          <a href="">
            <NetflixLogo />
          </a>
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Moview</li>
            <li>New & Popular</li>
            <li>MY List</li>
            <li>Browse by Languages</li>
          </ul>
      </div>
      <div className="navbar-right">
        <div className='searchicon'>
            <SearchIcon/>
        </div>
        <div className='bellicon'>
            <Bellicon/>
        </div>
        <div className="ss-icons">
          <Netflixavatar />
        </div>
      </div>
    </div>
  )
}

export default Navbar
