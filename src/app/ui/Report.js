"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../lib/types";

import Card from "./Card";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function ReportCanvas({ selectedMetricsList, addSelectedMetric, data }) {
    const [activeTab, setActiveTab] = React.useState(0);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.METRIC,
        drop: (item) => {
            addSelectedMetric(item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

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
                    <div className='charts flex justify-center'>
                        <Tabs>
                            <TabList className='flex border-b border-gray-200 mb-4'>
                                <Tab
                                    className={`py-2 px-4 cursor-pointer hover:text-gray-800 focus:outline-none ${
                                        activeTab === 0
                                            ? "border-b-chambrayblue border-b-2"
                                            : ""
                                    }`}
                                    onClick={() => setActiveTab(0)}>
                                    Line Chart
                                </Tab>
                                <Tab
                                    className={`py-2 px-4 cursor-pointer hover:text-gray-800 focus:outline-none ${
                                        activeTab === 1
                                            ? "border-b-chambrayblue border-b-2"
                                            : ""
                                    }`}
                                    onClick={() => setActiveTab(1)}>
                                    Pie Chart
                                </Tab>
                            </TabList>
                            <TabPanel className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 p-2'>
                                {selectedMetricsList?.map((metric) => (
                                    <LineChart
                                        key={metric.id}
                                        metricId={metric.id}
                                        campaignData={data}
                                        title={metric.name}
                                    />
                                ))}
                            </TabPanel>
                            <TabPanel className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 p-2'>
                                {selectedMetricsList?.map((metric) => (
                                    <PieChart
                                        key={"pie" + metric.id}
                                        metricId={metric.id}
                                        campaignData={data}
                                        title={metric.name}
                                    />
                                ))}
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportCanvas;
