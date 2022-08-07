import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/her-returns-to-form-on-her-debut-album-back-of-my-mind.jpg';
import {Text} from '@chakra-ui/react';
import 'tachyons';

const style = {
  backgroundImage: `url(${bg})`
}


const FeaturedUpdates = () => {
  return (
    <div className="relative h-72">
        <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72 opacity-90" style={style}>
            <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-25 w-full h-72" />
            <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
                <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-25 w-full h-72" />
            {/* <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment().format('MMM DD, YYYY')}</p> */}
                <Text color='white' className="mb-4 text-shadow font-bold text-xl text-center">H.E.R. Updates</Text>
                <div className="flex items-center absolute bottom-5 w-full justify-center">
                </div>
            </div>
        </div>  
        
        <Link to="/updates/h.e.r.-updates"><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
    );
}

export default FeaturedUpdates