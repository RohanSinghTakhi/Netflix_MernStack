import React from 'react'
import Title from './Title'
import Background from './Background'
import { useSelector } from 'react-redux';

function Maincontainer() {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies);
  if(!movie) return; 
 
  const {overview, id, title} = movie[4];
  return (
    <div>
        <Title title={title} overview={overview}/>
        <Background movieId={id}/>
    </div>
  )
}

export default Maincontainer