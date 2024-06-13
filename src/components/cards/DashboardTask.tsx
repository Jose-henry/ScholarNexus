"use client"

import Image from "next/image";

export default function DashboardTask() {
    return (
        <div className="w-[100%] h-[200px] bg-[#fbfbfb] rounded-[2px] cursor-pointer shadow-md shadow-black p-2"> 
            <div className="flex gap-1 items-center">
                <h2 className="text-[12.5px] text-[#070f4e] font-bold">Tasks</h2>
                <Image width="16" height="16" src="/assets/task-icon.svg" alt="deselect"/>
            </div>
            <div className="w-full h-[90%] border border-black">

            </div>
        </div>
    );
}