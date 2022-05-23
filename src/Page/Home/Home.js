import React from 'react';
import Gallery from './Gallery';
import Hero from './Hero';
import Reviews from './Reviews';
import Sponsers from './Sponsers';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Tools></Tools>
            <Gallery></Gallery>
            <Sponsers></Sponsers>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;