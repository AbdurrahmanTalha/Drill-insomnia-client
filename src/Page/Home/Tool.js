import React from 'react';

const Tool = ({ tool }) => {
    console.log(tool)
    const { name, desc, quantity, price, img } = tool
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} className="rounded-xl w-2/3" alt="" /></figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{desc}</p>
                <p>$<small>{price}</small></p>
                <p>Available: {quantity} </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;