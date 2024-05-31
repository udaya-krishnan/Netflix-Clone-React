import React from 'react'
import "./NavBar.css"
import Logo from "../../assets/logo.png"
import Search_Icon from "../../assets/search_icon.svg"
import Bell_icon from "../../assets/bell_icon.svg"
import profile_icon from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"

function NavBar() {
  return (
    <div className='nav-bar'>
        <div className="navbar-left">
            <img src={Logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movie</li>
                <li>New & Popular </li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={Search_Icon} alt="" className='icons' />
            <p>Children</p>
            <img src={Bell_icon} alt="" className='icons' />
            <div className="navbar-profile">
            <img src={profile_icon} alt="" className='profile-icon' />
            <img src={caret_icon} alt=""  />
                <div className="dropdown">
                  <p>Sign out</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar