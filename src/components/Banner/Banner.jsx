import React, { useState,useEffect } from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import './Banner.css'
import axios from '../../axios'
const Banner = () => {
    const [movie,setMovie] = useState()
    useEffect(()=>{
        axios.get(`/trending/all/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[5])
        })
    },[])
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.name:''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie?movie.overview:''}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner
