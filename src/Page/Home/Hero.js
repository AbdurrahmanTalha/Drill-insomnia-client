import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/4Nc1HZr/drill-home.png" alt="" className="max-w-sm lg:w-100 rounded-lg shadow-2xl" />
                <div className="lg:w-50">
                    <h1 className="text-5xl font-bold">Drill Insomnia!</h1>
                    <p className="py-6">Buy Drills from the best site ever Drill insomnia</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;