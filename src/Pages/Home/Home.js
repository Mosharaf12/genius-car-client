import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <h3>
               <Banner></Banner>
               <About></About>
               <Services></Services>
            </h3>
        </div>
    );
};

export default Home;