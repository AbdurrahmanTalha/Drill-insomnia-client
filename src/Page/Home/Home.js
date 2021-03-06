import React from 'react';
import Footer from '../../Components/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;