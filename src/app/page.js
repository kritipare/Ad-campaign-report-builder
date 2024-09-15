import instance from "./lib/axios";
import LandingPage from "./ui/LandingPage";

export default async function Home() {
    let error, metricData, metricListData;
    try {
        // sidebar data
        const responseMetricList = await instance.get(
            "291bf921-535d-45a2-8eee-e8c3b5d86e49",
        );
        metricListData = responseMetricList.data;

        // report data
        const responseMetricData = await instance.get(
            "d7d1dd1f-67e5-4557-98cd-2a134d3a3170",
        );
        metricData = responseMetricData.data;
    } catch (error) {
        error = error;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <LandingPage sidebarData={metricListData} reportData={metricData} />;
}
