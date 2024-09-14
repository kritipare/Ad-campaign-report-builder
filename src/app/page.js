"use client";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Sidebar from "./ui/Sidebar";
import Report from "./ui/Report";

export default function Home() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className='flex'>
                <Sidebar />
                <Report />
            </div>
        </DndProvider>
    );
}
