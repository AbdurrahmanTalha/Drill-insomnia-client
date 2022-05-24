import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0gCiDh33OITU8tisN65PqmybnDEYMcqSnwxw9xpe1X1nsHFvumaa9GDj5YVOlfe4u53eROcqqJCq1bGXIApUGJ00FLPRhXLo');

const Payment = () => {
    const { id } = useParams();
    const url = `https://shrouded-mesa-73405.herokuapp.com/purchase/${id}`;
    const { data: product, isLoading } = useQuery(['payment', id], () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-500 bg-base-200 my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {product?.buyer}</p>
                    <h2 className="card-title">Pay for <span className="text-red-500">{product?.productName}</span></h2>
                    <p>Please Pay: ${product?.productPrice} </p>

                </div>
            </div>
            <div className="card flex-shrink-0 max-w-md  shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;