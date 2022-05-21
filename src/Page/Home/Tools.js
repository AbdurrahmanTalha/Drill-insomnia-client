import React from 'react';
import Tool from './Tool';
import { useQuery } from "react-query"
const Tools = () => {
    const { isLoading, data: tools } = useQuery("tool", () => fetch("http://localhost:5000/tools").then(res => res.json())
    )
    if (isLoading) {
        return <p>Loading...</p>
    }
    console.log(tools)
    return (
        <div className="p-5">
            <h2 className="text-center text-3xl mb-5">Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    tools?.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;