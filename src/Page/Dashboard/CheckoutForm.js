import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { success } from 'daisyui/src/colors';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading';

const CheckoutForm = ({ product }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [loading, setLoading] = useState(false)
    const { productPrice, buyer, buyerEmail, _id } = product;
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        fetch("https://drill-insomnia-server.onrender.com/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ productPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                    setLoading(false)
                    navigate('/dashboard/myOrders')
                }
            })
    }, [productPrice])

    if (loading) {
        return <Loading></Loading>
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });



        setCardError(error?.message || '')
        setSuccess('');
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyer,
                        email: buyerEmail
                    },
                },
            },
        );

        if (intentError) {
            setLoading(false)
            setCardError(intentError?.message)
        } else {
            setLoading(true)
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.')

            //store payment on database
            const payment = {
                product: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://drill-insomnia-server.onrender.com/payment/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setLoading(false)
                })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className="text-red-500 text-1xl">{cardError}</p>
            {
                success && <div>
                    <p className="text-green-500 text-1xl">{cardSuccess}</p>

                </div>
            }
            {
                transactionId && <p className="text-green-500 text-1xl">Your Transition Id: <span className="text-orange-500 font-bold">{transactionId}</span></p>
            }
            <button className="btn my-5 btn-block" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;
