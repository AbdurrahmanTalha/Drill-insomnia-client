import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl">Rating: {review.review}</p>
                        <h4 className="text-1xl">{review.name}</h4>
                    </div>
                </div>
                <p>{review?.description}</p>
               
            </div>
        </div>
    );
};

export default Review;