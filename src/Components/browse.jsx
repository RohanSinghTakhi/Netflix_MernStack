import React, { useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Browse() {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.app.user)
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]); 

  return (
    <>
      <Header />
      <div>Welcome to the Browse page!</div>
    </>
  );
}

export default Browse;
