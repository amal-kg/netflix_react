import React from 'react'
import YouTube from 'react-youtube'
import { useEffect, useState } from 'react'
import { ImageUrl, API_KEY } from '../../Constants/constants'
import axios from '../../Axios'
import './RowPost.css'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response => {
            // console.log(response.data.results[0]);
            setMovies(response.data.results)
        }).catch(err => {
            // alert('Network error')
        })

    }, [])
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            console.log(response.data.results[0]);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])

            } else {
                console.log("Empty Aarray");
            }
        })

    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movies.map(obj =>

                        <img onClick={() => handleMovie(obj.id)} className={props.isOne ? 'smallPoster' :props.isTwo ? 'smallPoster1': props.isThree ? 'smallPoster1': props.isFour ? 'smallPoster2': 'poster'} 
                        src={`${ImageUrl + obj.backdrop_path}`} alt="poster" />

                    )
                }

            </div>
            {console.log(urlId.key)}

            {urlId && <YouTube videoId={urlId.key} opts={opts}   />}

        </div>
    )
}

export default RowPost

