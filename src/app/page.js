"use client";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import instance from "./lib/axios";

import Sidebar from "./ui/Sidebar";
import Report from "./ui/Report";

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
        <DndProvider backend={HTML5Backend}>
            <div className='flex'>
                <Sidebar metrics={data} />
                <Report />
            </div>
        </DndProvider>
    );
}
