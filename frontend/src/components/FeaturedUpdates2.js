import React from 'react';
import { Link } from 'react-router-dom';
import image02 from '../assets/shegang.jpeg';

const style = {
  backgroundImage: `url(${image02})`
}


const FeaturedUpdates2 = () => {
  return (
    <div className="featured h-72">
        <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-90 h-72 opacity-95" style={style}>
        </div>
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-25 w-full h-72"/>
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <p className="text-white mb-40 text-shadow font-bold text-xl text-center">SheGang Meetups</p>
        <div className="flex items-center absolute bottom-5 w-full justify-center">
        </div>
        </div>
        <Link to="/meetups/shegang"><span className="cursor-pointer absolute w-full h-full" /></Link>

    </div>
  )
}

export default FeaturedUpdates2