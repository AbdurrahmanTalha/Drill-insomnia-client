import React from 'react';
import Hero from './Hero';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Tools></Tools>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;