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
    const [selectedMetricsList, setSelectedMetricsList] = useState([]);

    const addSelectedMetric = (metric) => {
        setSelectedMetricsList((selectedMetricsList) => [
            ...new Set([...selectedMetricsList, metric]),
        ]);
    };

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
        <DndProvider backend={HTML5Backend}>
            <div className='flex'>
                <Sidebar data={data} />
                <Report
                    selectedMetricsList={selectedMetricsList}
                    addSelectedMetric={addSelectedMetric}
                />
            </div>
        </DndProvider>
    );
}
