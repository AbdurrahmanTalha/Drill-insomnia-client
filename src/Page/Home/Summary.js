import React from 'react';

const Summary = () => {
    return (
        <div className="flex justify-center align-middle">
            <div>
                <div className="divider"></div>
                <h2 className='text-center text-3xl font-bold'>BUSINESS SUMMARY</h2>
                <div className="divider"></div>
                <div className="stats my-10 stats-vertical lg:stats-horizontal shadow">
                    <div className="stat border-sky-500">
                        <div className="stat-title text-2xl">Served</div>
                        <div className="stat-value">100+</div>
                        <div className="stat-desc text-2xl">Customers</div>
                    </div>
                    <div className="stat border-sky-500">
                        <div className="stat-title text-2xl">Annual</div>
                        <div className="stat-value">120M+</div>
                        <div className="stat-desc text-2xl">revenue</div>
                    </div>
                    <div className="stat border-sky-500">
                        <div className="stat-title text-2xl">Customer</div>
                        <div className="stat-value">32k+</div>
                        <div className="stat-desc text-2xl">Reviews</div>
                    </div>
                    <div className="stat border-sky-500">
                        <div className="stat-title text-2xl">Drill</div>
                        <div className="stat-value">500k+</div>
                        <div className="stat-desc text-2xl">made</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;