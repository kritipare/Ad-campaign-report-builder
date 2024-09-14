import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../lib/types";

import Card from "./Card";

function ReportCanvas() {
    const [selectedMetricsList, setSelectedMetricsList] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.METRIC,
        drop: (item) => {
            setSelectedMetricsList((selectedMetricsList) => [
                ...selectedMetricsList,
                item,
            ]);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div ref={drop} className='flex flex-1 w-100 h-100 p-10 bg-gray-100'>
            <div className='flex w-full bg-gray-50 border-dashed border-4 border-gray-200 mt-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 p-2'>
                    {selectedMetricsList?.map((selectedMetric) => (
                        <Card
                            key={selectedMetric.id}
                            title={selectedMetric.name}
                            impressions={selectedMetric.impressions}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReportCanvas;
