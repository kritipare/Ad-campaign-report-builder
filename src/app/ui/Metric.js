import { useDrag } from "react-dnd";
import { ItemTypes } from "../lib/types";
import { useEffect } from "react";

function Metric({
    metric,
    bgColor = "bg-chambrayblue",
    textColor = "text-chambrayblue",
}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.METRIC,
        item: metric,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <span
            style={{ textTransform: "capitalize" }}
            ref={drag}
            className={`text-center inline-block ${textColor} w-full hover:bg-chambrayblue border-2 border-chambrayblue hover:text-white cursor-pointer rounded-full px-4 py-2 text-sm font-semibold`}>
            {metric?.name}
        </span>
    );
}

export default Metric;
