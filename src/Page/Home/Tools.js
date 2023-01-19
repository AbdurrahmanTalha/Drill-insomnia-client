import React from 'react';
import Tool from './Tool';
import { useQuery } from "react-query";
import Loading from '../../Components/Loading'
const Tools = () => {
    const { isLoading, data: tools } = useQuery("tool", () => fetch("https://drill-insomnia-server.onrender.com/tools/home").then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="p-5">
            <div className="divider"></div>
            <h2 className='text-center text-3xl font-bold'>DRILLS</h2>
            <div className="divider"></div>
            <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    tools?.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;
