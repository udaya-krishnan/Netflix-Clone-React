import React, { useEffect, useState } from 'react'
import "./TitleCards.css"
import Cards_data from "../../assets/cards/Cards_data"
import {Image_Path} from "../../config"
import { Link } from 'react-router-dom'

function TitleCards({title,category}) {
  
  const [apiData,setApiData]=useState([])


  const url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGMxZTgzYmE0YTUwZTgwY2ZiNTVkNDRhYWM3MWUyYyIsInN1YiI6IjY2NTk1ZjJmMWNmMTY0NjUxNTk0MDUwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ka74oZZK1hT2EkFaVfPSlk82b7wb8uo4DbTMqZAmj8E'
    }
  };

  useEffect(()=>{
    fetch(url, options)
    .then(res => res.json())
    .then(json => setApiData(json.results))
    .catch(err => console.error('error:' + err));
  },[])
  
  






  return (
    <div className='titleCards'>
      <h2>{title}</h2>
      <div className="card-list">
        {apiData.map((card,index)=>{
         return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={Image_Path+card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
        </Link>
        })}
        
      </div>
    </div>
  )
}

export default TitleCards