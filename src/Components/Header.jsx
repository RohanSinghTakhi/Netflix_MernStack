import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io"

function Header() {
  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black pt-5">
    <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix-logo" />   
    <div className="flex items-center">
       <IoIosArrowDropdown color='white' size={"24px"}/>
        <h1 className='text-lg font-medium text-white'> Takhi</h1>
        <div className="ml-4">
          <button className="bg-red-800 text-white px-4 py-2">Logout</button>
          <button className="bg-red-800 text-white px-4 py-2 ml-2">Search Movie</button>
        </div>
      </div>
    </div>
  );
  
}

export default Header