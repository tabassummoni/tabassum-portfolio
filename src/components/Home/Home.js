import React from 'react';
import About from '../about/About';
import CarouselImages from '../carousel/CarouselImages.js';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Interest from '../skills/Interest';
import Traininng from '../Traininng/Traininng';

const Home = () => {
    return (
        <div>
            <CarouselImages></CarouselImages>
            <About></About>
            <Interest></Interest>
            <Education></Education>
            <Traininng></Traininng>
            <Projects></Projects> 
        </div>
    );
};

export default Home;