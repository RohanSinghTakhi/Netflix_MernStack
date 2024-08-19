import React from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

function Background({ movieId, bool }) {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);
  
  console.log('Selected Trailer Movie:', trailerMovie); // Ensure correct state is logged

  useMovieById(movieId);

  return (
    <div>
      <div className="w-[vw] overflow-hidden">
        {trailerMovie?.key ? (
          <iframe
            className={`${bool ? 'w-[100%]' : 'w-screen aspect-video'}`}
            src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <p>Loading trailer...</p>
        )}
      </div>
    </div>
  );
}

export default Background;
