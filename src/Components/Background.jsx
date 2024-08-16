import React from 'react'
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';
function Background({movieId,bool}) {

  const trailerMovie = useSelector(store=>store.movie.trailerMovie);
  useMovieById(movieId);
  return (
    <div>
        <div className='w-[vw] overflow-hidden'>
            <iframe
                className={`${bool ? "w-[100%]" : "w-screen aspect-video" } `}
                src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    </div>
  )
}

export default Background