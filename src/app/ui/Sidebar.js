import React from "react";
import { useEffect, useState } from "react";

import Metric from "./Metric";
import instance from "../lib/axios";

const Sidebar = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get(
                    "291bf921-535d-45a2-8eee-e8c3b5d86e49",
                );
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='flex rounded p-2 m-4'>
            <div className='w-64 h-screen p-5'>
                <div className='flex items-center justify-center mb-10'>
                    <div className='text-chambrayblue font-bold text-4xl'>
                        Zocket
                    </div>
                </div>
                <ul className='text-white space-y-5'>
                    {data?.map((metric) => {
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
