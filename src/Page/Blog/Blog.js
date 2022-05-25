import React from 'react';
import Footer from '../../Components/Footer';

const Blogs = () => {
    return (
        <div className=''>
            <div className="divider"></div>
            <h2 className='text-center text-3xl font-bold'>Question & Answer</h2>
            <div className="divider"></div>

            <div className=''>
                <div className='lg:ml-20 lg:mr-20 card-body'>
                    <h2 className='text-2xl text-blue-500 '><span className='text-3xl font-bold'>#</span>How will you improve the performance of a React Application?</h2>
                    <p className='mt-3'>To improve a react applications performance, we should avoid repeating the same code as it causes unnecessaray re-render. We can use react optimization tool to detect our performance problems and take necessary steps following that.</p>
                </div>

                <div className='lg:ml-20 lg:mr-20 card-body mt-4'>
                    <h2 className='text-2xl text-blue-500 '><span className='text-3xl font-bold'>#</span>What are the different ways to manage a state in a React application?</h2>
                    <div>
                        <p className='mt-3'>There are many ways to manage a state. The 4 main types of states are as follows-
                        </p>
                        <ul className='text-blue-500 md:ml-20 lg:ml-20'>
                            <li><span className='font-bold text-xl'>></span> Local State</li>
                            <li><span className='font-bold text-xl'>></span> Global State</li>
                            <li><span className='font-bold text-xl'>></span> Server State</li>
                            <li><span className='font-bold text-xl'>></span> URL State</li>
                        </ul>
                    </div>
                </div>

                <div className='lg:ml-20 lg:mr-20 card-body mt-4'>
                    <h2 className='text-2xl text-blue-500 '><span className='text-3xl font-bold'>#</span>How does prototypical inheritance work?</h2>
                    <p className='mt-3'>This is a method that helps an object to get properties and methods of another object without making the same things repeatedly.
                    </p>
                </div>

                <div className='lg:ml-20 lg:mr-20 card-body mt-4'>
                    <h2 className='text-2xl text-blue-500 '><span className='text-3xl font-bold'>#</span>Why you do not set the state directly in React?</h2>
                    <p className='mt-3'>If you update state directly, calling the setState() afterward may just replace the update you made.
                        When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        You will lose control of the state across all components
                    </p>
                </div>

                <div className='lg:ml-20 lg:mr-20 card-body mt-4'>
                    <h2 className='text-2xl text-blue-500 '><span className='text-3xl font-bold'>#</span>What is a unit test? Why should we write unit tests?</h2>
                    <p className='mt-3'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;