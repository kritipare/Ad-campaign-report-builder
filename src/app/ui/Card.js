import React from "react";

const Card = ({ title }) => {
    return (
        <div className='bg-white rounded-xl shadow-md overflow-hidden p-4 m-1'>
            <div className='text-center'>
                <h2 className='text-md font-semibold text-chambrayblue'>
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default Card;
