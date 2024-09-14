import React from "react";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
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

const LineChart = ({ title, scale = 1000 }) => {
    // Sample data for the chart
    const data = {
        labels: [
            "Campaign1",
            "Campaign2",
            "Campaign3",
            "Campaign4",
            "Campaign5",
            "Campaign6",
        ],
        datasets: [
            {
                label: "Impressions",
                data: [6500, 5900, 8000, 8100, 5600, 5500, 4000],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
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
        <div>
            <h3>{title}</h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
