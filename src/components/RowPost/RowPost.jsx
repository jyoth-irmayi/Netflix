import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {API_KEY,imageUrl} from '../../Constants/constants'
import Youtube from 'react-youtube'
import axios from '../../axios'
const RowPost = (props) => {
    const [movies,setMovies]= useState([])
    const [Youtubeid,setId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log(response.data.results)
            setMovies(response.data.results)
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };
    const handleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setId(response.data.results[0])
            }
        })
    }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=> 
            <img onClick={()=>handleMovie(obj.id)} key={obj.id} className= {props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`}/>
        )}
      </div>
      { Youtubeid && <Youtube opts={opts} videoId={Youtubeid.key} />}
    </div>
  )
}

export default RowPost
