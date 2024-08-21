import React, { useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Moviecontainer from './Moviecontainer';
import Maincontainer from './Maincontainer';
import { Now_Playing_Movie, options } from '../utils/constant';
import axios from 'axios';
import { getNowPlayingMovies } from '../redux/movieSlice'; 
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

function Browse() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector(store => store.movie.toggle);


  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGJlZjViMDUzNWE3OGYwMjllMTQ0NDE5NTQ4MjM4MCIsInN1YiI6IjY1MDRhMjNkNTllOGE5MDExZWNhYTVjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LTBaAb_2NPRGPr2HeGszyFDP-onLh-fiL7fzmnOFZUg'
          },
          timeout: 10000 // 10 seconds timeout
        };
        const res = await axios.get(Now_Playing_Movie, options);
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.log('Error fetching Now Playing movies:', error);
      }
    };
  
    fetchNowPlayingMovies();
  }, [dispatch]);
  
  
 
  return (
    <>
      <Header />
      <div>
      {
                    toggle ? <SearchMovie /> : (
                        <>
                            <Maincontainer />
                            <Moviecontainer />
                        </>

                    )
                }

      </div>
    </>
  );
}

export default Browse;
