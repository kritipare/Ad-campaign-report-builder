"use client";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Sidebar from "./Sidebar";
import Report from "./Report";

const LandingPage = ({ sidebarData, reportData }) => {
    const [selectedMetricsList, setSelectedMetricsList] = useState([]);

    const addSelectedMetric = (metric) => {
        setSelectedMetricsList((selectedMetricsList) => [
            ...new Set([...selectedMetricsList, metric]),
        ]);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='flex'>
                <Sidebar data={sidebarData} />
                <Report
                    selectedMetricsList={selectedMetricsList}
                    addSelectedMetric={addSelectedMetric}
                    data={reportData}
                />
            </div>
        </DndProvider>
    );
};

export default LandingPage;
