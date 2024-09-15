import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(ArcElement);

export default function PieChart({ metricId, campaignData, title }) {
    const data = {
        labels: campaignData?.map((campaign) => campaign.name),
        datasets: [
            {
                label: title,
                data: campaignData?.map(
                    (campaign) => campaign.metrics[metricId],
                ),
                backgroundColor: campaignData?.map(
                    (campaign) => campaign.color,
                ),
                hoverOffset: 4,
                tension: 0.1,
            },
        ],
    };
    return (
        <div className='p-2 m-2'>
            <h3 className='text-center font-bold text-1xl text-chambrayblue'>
                {title}
            </h3>
            <Pie
                data={data}
                options={{
                    maintainAspectRatio: true,
                    plugins: {
                        title: {
                            display: true,
                            text: { title },
                        },
                    },
                }}
            />
        </div>
    );
}
