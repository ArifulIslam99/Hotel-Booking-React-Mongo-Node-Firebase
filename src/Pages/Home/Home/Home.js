import React from 'react';
import Banner from '../Banner/Banner';
import Rooms from '../Rooms/Rooms';
import Testimonial from '../Testimonial/Testimonial';
import Facilities from './Facilities/Facilities';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <Rooms></Rooms>
           <Facilities></Facilities>
           <Testimonial></Testimonial>
           
         
        </div>
    );
};

export default Home;