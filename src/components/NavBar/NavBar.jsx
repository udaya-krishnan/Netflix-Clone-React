import React, { useEffect, useRef } from 'react'
import "./NavBar.css"
import Logo from "../../assets/logo.png"
import Search_Icon from "../../assets/search_icon.svg"
import Bell_icon from "../../assets/bell_icon.svg"
import profile_icon from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase'

function NavBar() {

  const useref=useRef()

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>=80){
        useref.current.classList.add('nav-dark')
      }else{
        useref.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={useref} className='nav-bar'>
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
                  <p onClick={()=>{logout()}}>Sign out</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar