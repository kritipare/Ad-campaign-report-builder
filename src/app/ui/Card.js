import React from "react";

const Card = ({ title, impressions }) => {
    return (
        <div className='bg-white rounded-xl shadow-md overflow-hidden p-4 m-1 h-20'>
            <div className='text-center'>
                <h2 className='text-md font-semibold text-gray-800'>{title}</h2>
                <p className='text-2xl font-bold mt-4'>{impressions}</p>
            </div>
        </div>
    );
};

export default Card;
