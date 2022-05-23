import React from 'react';

const Gallery = () => {
    return (
        <div className="mx-auto mb-5 mt-5">
            <h2 className="text-2xl mb-5 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                <img src="https://ak.picdn.net/shutterstock/videos/15945826/thumb/1.jpg" className="w-100 mr-5" alt="" />
                <img src="https://previews.123rf.com/images/kzenon/kzenon1506/kzenon150600132/41112190-hombre-chino-que-trabaja-con-la-m%C3%A1quina-de-perforaci%C3%B3n-poder-en-la-f%C3%A1brica.jpg" className="w-100 mr-5" alt="" />
                <img src="https://i.ytimg.com/vi/rEMcU4QdX1s/maxresdefault.jpg" className="w-100 mr-5" alt="" />
            </div>
        </div>
    );
};

export default Gallery;