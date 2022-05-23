import React from 'react';

const Sponsers = () => {
    return (
        <div className="mx-auto mb-5 mt-5">
            <h2 className="text-2xl mb-5 text-center">Sponsors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <img src="https://i.pinimg.com/736x/8e/05/72/8e0572ca90458519ab7082ff0bb5def6--vector-icons-design-elements.jpg" className="w-100 mr-5" alt="" />
                <img src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.png" className="w-100 mr-5" alt="" />
                <img src="https://preview.redd.it/gj1t3nckxyx61.png?auto=webp&s=a0925041ccf11f7453ba4b27cfec24afa0f34594" className="w-100 mr-5" alt="" />
            </div>
        </div>
    );
};

export default Sponsers;