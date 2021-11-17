import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../Components/axios'
import { imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'


function Rowpost(props) {
    const [movie, setMovie] = useState([]);
    const [urlid,seturlid] =useState();

    useEffect(() => {
        axios.get(props.url).then(response =>{ 
         
            setMovie(response.data.results);
        })

    }, [])

        const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleClick=(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=d03799692be1c26faf0ade18a4205f9f&language=en-US`).then( response =>{
            if(response.data.results.length!==0){
                seturlid(response.data.results[0]);
            }
            else{
                console.log("Array empty");
            }
            }
        )

    }


    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj)=>
                <img onClick={()=>handleClick(obj.id)} className={props.issmall ? "smallposter":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="imagee" />
                )}
            </div>
            
            { urlid &&  <Youtube videoId={urlid.key} opts={opts} /> }
    
        </div>
    )
}

export default Rowpost
