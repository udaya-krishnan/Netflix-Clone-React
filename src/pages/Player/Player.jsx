import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useParams } from 'react-router-dom'

function Player() {

  const {id}=useParams()
  
  const Navigate=useNavigate()

  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeOf:""
  }) 

const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
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
  .then(json => setApiData(json.results[0]))
  .catch(err => console.error('error:' + err));

},[])


  return (
    <div className='player'>

      <img src={back_arrow_icon} alt="" onClick={()=>Navigate(-2)} />
      
      
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width='90%' height='90%' title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeOf}</p>
      </div>
    </div>
  )
}

export default Player