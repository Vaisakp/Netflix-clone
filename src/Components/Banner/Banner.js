import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Components/axios'
import { API_KEY , imageUrl} from '../../constants/constants'

export const Banner = () => {
    const [movie, setMovie] = useState('');
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
       
            setMovie(response.data.results[0])
        })
    }, [])

    return (
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`} }
        className='banner' >
            <div className='content'> 
                <h1 className='title'>{movie.name ? movie.name:movie.title}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='discription'>{movie ?movie.overview : ''}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}
