import React from 'react';

const Summary = () => {
    return (
        <div className="flex justify-center align-middle">
            <div>
                <h2 className="text-3xl text-center mb-5">Business Summary</h2>
                <div class="stats stats-vertical lg:stats-horizontal shadow">
                    <div class="stat border-sky-500">
                        <div class="stat-title text-2xl">Served</div>
                        <div class="stat-value">100+</div>
                        <div class="stat-desc text-2xl">Customers</div>
                    </div>
                    <div class="stat border-sky-500">
                        <div class="stat-title text-2xl">Annual</div>
                        <div class="stat-value">120M+</div>
                        <div class="stat-desc text-2xl">revenue</div>
                    </div>
                    <div class="stat border-sky-500">
                        <div class="stat-title text-2xl">Customer</div>
                        <div class="stat-value">32k+</div>
                        <div class="stat-desc text-2xl">Reviews</div>
                    </div>
                    <div class="stat border-sky-500">
                        <div class="stat-title text-2xl">Tools</div>
                        <div class="stat-value">500k+</div>
                        <div class="stat-desc text-2xl">made</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;