import React from "react";
import Metric from "./Metric";

const Sidebar = ({ metrics }) => {
    return (
        <div className='flex rounded p-2 m-4'>
            <div className='w-64 h-screen p-5'>
                <div className='flex items-center justify-center mb-10'>
                    <div className='text-chambrayblue font-bold text-m'>
                        Ad Campaign Report Generator
                    </div>
                </div>
                <ul className='text-white space-y-5'>
                    {metrics?.map((metric) => {
                        return (
                            <li key={metric.id}>
                                <Metric metric={metric} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
