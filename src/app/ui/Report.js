import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../lib/types";
import instance from "../lib/axios";

import Card from "./Card";
import LineChart from "./LineChart";

function ReportCanvas({ selectedMetricsList, addSelectedMetric }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.METRIC,
        drop: (item) => {
            addSelectedMetric(item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    useEffect(() => {
        const fetchCampaignData = async () => {
            try {
                const response = await instance.get(
                    "d1cf0a15-4b18-43c3-afa2-095b5e55c31d",
                );
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCampaignData();
    }, []);

    return (
        <div className='flex flex-col w-full'>
            <h2 className='text-chambrayblue text-2xl text-center font-bold p-4 m-4'>
                Ad campaign report generator
            </h2>
            <div ref={drop} className='flex flex-1 w-100 h-100 p-5 bg-gray-100'>
                <div className='flex flex-col w-full bg-gray-50 border-dashed border-4 border-gray-200 mt-4 p-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 p-2'>
                        {selectedMetricsList?.map((selectedMetric) => (
                            <Card
                                key={selectedMetric.id}
                                title={selectedMetric.name}
                                impressions={selectedMetric.impressions}
                            />
                        ))}
                    </div>
                    <div className='charts grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 p-2'>
                        {selectedMetricsList?.map((metric) => (
                            <LineChart
                                key={metric.id}
                                metricId={metric.id}
                                campaignData={data}
                                title={metric.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportCanvas;
