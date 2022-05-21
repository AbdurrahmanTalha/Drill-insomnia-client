import React from 'react';
import { useQuery } from 'react-query';
import Review from './Review';

const Reviews = () => {
   
    const { isLoading, data: reviews } = useQuery("review", () => fetch("http://localhost:5000/rating").then(res => res.json())
    )
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className="my-5 p-5">
            <h2 className="text-center text-3xl">Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    reviews?.map(review => <Review review={review} key={review._id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;