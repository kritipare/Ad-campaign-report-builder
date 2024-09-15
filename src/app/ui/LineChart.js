import React from "react";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from "chart.js";

// Register the components
ChartJS.register(
    CategoryScale, // x-axis
    LinearScale, // y-axis
    PointElement,
    LineElement,
    Tooltip,
);

const LineChart = ({ metricId, campaignData, title }) => {
    const data = {
        labels: campaignData?.map((campaign) => campaign.name),
        datasets: [
            {
                label: title,
                data: campaignData?.map(
                    (campaign) => campaign.metrics[metricId],
                ),
                fill: false,
                borderColor: "#0358AF",
                tension: 0.1,
            },
        ],
    };

    // Options for the chart
    const options = {
        scales: {
            y: {
                beginAtZero: false,
            },
        },
    };

    return (
        <div className='p-2 m-2'>
            <h3 className='text-center font-bold text-1xl text-chambrayblue'>
                {title}
            </h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
