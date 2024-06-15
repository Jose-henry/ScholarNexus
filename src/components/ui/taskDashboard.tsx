"use client"

import {Avatar} from 
"@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface Props {
    task: string;
    date: any;
}

export default function TaskDashboard({task, date}: Props) {
    return (
        <div className="flex bg-white border-b-[1px] border-b-[#dee1ec] p-1 pr-2 shadow-sm pl-3 justify-between items-center"> 
            <div className="flex gap-2">
                <Image width="12" height="12" src="/assets/circle.svg" alt="tikcet"/>
                <p className="text-[11px] font-semibold">{task}</p>
            </div>
            <p className="text-[9px] font-bold text-[#152744]">{date}</p>
        </div>
    );
}