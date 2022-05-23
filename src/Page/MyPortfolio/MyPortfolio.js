import React from 'react';

const MyPortfolio = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/267601785_448837860289942_2416199192166953585_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJXrlJNnXa-cGocIjlNPzPhhLuF0QrHViGEu4XRCsdWDUsugoA6gNZbml4mm1ewNhSN8__l0FvbfKu4BZGBrcx&_nc_ohc=esKRFGMN85YAX9YR-WQ&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT-KAcjVfAEpjGLs1q2JewZyXSbsNRUtbDO88uPTxBFhJg&oe=629115E3" />
                </div>
            </div>
            <div className="w-2/4 text-center">
                <p>Name: Abdur Rahman Talha</p>
                <p>Email: abdurrahmantalha331@gmail.com</p>
                <p>Skills || Technologies: Technologies: React, MongoDB, bootstrap 5,Javascript, express.js, Node.js, Html5, css3 antdesign, tailwind, daisyUi, MongoDB, React-router-dom, react-firebase-hooks, react-hook-form, firebase, Cors, Rest Api, Spa, </p>
                <p>Omnigaming: https://omnigaming-75275.firebaseapp.com/</p>
                <p>Photo Mania: https://independent-service-prov-74ae6.web.app/</p>
                <p>Laptop Mania: https://laptopmania.netlify.app/ </p>
            </div>

        </div>
    );
};

export default MyPortfolio;