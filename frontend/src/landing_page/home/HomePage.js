import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Price';
import Stats from './Stats';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';


function HomePage() {
    return ( 
        <>
         
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            

        </>
     );
}

export default HomePage;