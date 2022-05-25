import React from 'react';
import Footer from '../../Components/Footer';

const MyPortfolio = () => {
    return (
        <div className="">
            <div className="divider"></div>
            <h2 className='text-center text-3xl font-bold'>MY PORTFOLIO</h2>
            <div className="divider"></div>
            <div className="p-5 flex my-10 flex-col justify-center items-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-5">
                        <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/267601785_448837860289942_2416199192166953585_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJXrlJNnXa-cGocIjlNPzPhhLuF0QrHViGEu4XRCsdWDUsugoA6gNZbml4mm1ewNhSN8__l0FvbfKu4BZGBrcx&_nc_ohc=esKRFGMN85YAX9YR-WQ&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT-KAcjVfAEpjGLs1q2JewZyXSbsNRUtbDO88uPTxBFhJg&oe=629115E3" alt="" />
                    </div>
                </div>
                <div className="w-2/4 text-center">
                    <p className="text-2xl font-bold"> Abdur Rahman Talha</p>
                    <p className="text-blue-700 text-xl mb-4">Email: abdurrahmantalha331@gmail.com</p>

                    <p className='text-center font-bold text-xl mb-6'>Skills || Technologies</p>
                    <p className='font-bold text-blue-700'>React, MongoDB, bootstrap 5, Javascript, express.js, Node.js, Html5, css3, antdesign, tailwind, daisyUi, MongoDB, React-router-dom, react-firebase-hooks, react-hook-form, firebase, Cors, Rest Api, Spa, </p>

                    <p className='text-center font-bold text-xl my-6'>My Best Projects</p>
                    <p>Omnigaming:<span className='text-blue-700'>https://omnigaming-75275.firebaseapp.com/</span></p>
                    <p>Photo Mania: <span className='text-blue-700'>https://independent-service-prov-74ae6.web.app/</span></p>
                    <p>Laptop Mania:<span className='text-blue-700'> https://laptopmania.netlify.app/</span></p>
                </div>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;