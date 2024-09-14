"use client";
import axios from "axios";
import instance from "./common/axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get();
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
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
                <ul>
                    {data?.map((ad) => (
                        <li key={ad.id}>{ad.name}</li>
                    ))}
                </ul>
            </main>
            <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
                Made via Next.js
            </footer>
        </div>
    );
}
