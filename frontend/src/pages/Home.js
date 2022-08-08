import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Row, Col, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FeaturedUpdates from '../components/FeaturedUpdates';
import FeaturedUpdates2 from '../components/FeaturedUpdates2';
import '../globals.scss';
import 'tachyons';
import { Text } from '@chakra-ui/react';
import Alert from 'react-bootstrap/Alert';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};




const Home = () => {
  const customleftarrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customrightarrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );


  return (
    <div>
      {[
        'secondary'
      ].map((variant) => (
        <Alert key={variant} variant={variant} style={{color: 'white'}}>
          Login to gain access to the SheGang Chat dashboard!
        </Alert>
      ))}
      <Row>
        <div md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
        <Text color='white' md={6} className='text-white description' style={{ fontSize: '13px'}}>A PLACE FOR ALL H.E.R. FANS TO FIND ALL THINGS H.E.R., <br />SHE GANG ACTIVITIES, SCHOOL AND CAREER RESOURCES, AND A SENSE OF COMMUNITY. </Text>

        </div>
      </Row>

      <div>
      <Carousel className='carousel' infinite customleftarrow={customleftarrow} customrightarrow={customrightarrow} responsive={responsive} itemClass="px-4">
            <div><FeaturedUpdates /></div>
            <div><FeaturedUpdates2 /></div>
        </Carousel>
      </div>
    </div>
  )
}

export default Home;