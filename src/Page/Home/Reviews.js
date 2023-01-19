import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import Review from './Review';

const Reviews = () => {

    const { isLoading, data: reviews, refetch } = useQuery("review", () => fetch("https://drill-insomnia-server.onrender.com/rating",).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>;
    }
    refetch()
    return (
        <div className="my-5 p-5">
            <div className="divider"></div>
            <h2 className='text-center text-3xl font-bold'>WHAT CUSTOMERS SAY</h2>
            <div className="divider"></div>
            <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    reviews?.map(review => <Review review={review} key={review._id}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
