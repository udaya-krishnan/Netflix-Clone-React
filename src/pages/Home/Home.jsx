import React from 'react'
import "./Home.css"
import NavBar from '../../components/NavBar/NavBar'
import hero from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


function Home() {   
  return (
    <div className='home'>
        <NavBar/>
        <div className="hero">
          <img src={hero} alt="hero" className='banner_img' />
          <div className="hero_caption">
            <img src={hero_title} alt="" className='caption_img' />
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
               used to demonstrate the visual form of a document or a typeface without relying
                on meaningful content</p>
                <div className="hero-btns">
                  <button className='btn'><img src={play_icon} alt="" />Play</button>
                  <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
                </div>
                <TitleCards title={"Popular"} category={"popular"}/>
          </div>
        </div>
        <div className='more-cards'>
        <TitleCards  title={"Now Playing"}   category={"now_playing"}/>
        <TitleCards  title={"Top Rated"}  category={"top_rated"}/>
        <TitleCards  title={"UpComing"}  category={"upcoming"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home