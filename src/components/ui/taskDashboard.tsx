"use client"

import {Avatar} from 
"@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import ToDoBtn from "../forms/toDoBtn";

interface Props {
    task: string;
    label: string;
    date: any;
}

export default function TaskDashboard({task, date, label}: Props) {
    return (
        <div className="flex bg-white border-b-[1px] border-b-[#dee1ec] p-1 pr-2 shadow-sm pl-3 justify-between items-center "> 
            <div className="flex gap-2">
                <div className="flex gap-4">
                    <ToDoBtn />
                    <span className="mr-2 rounded-full w-[80px] px-2 py-1 text-xs text-primary-foreground bg-[#142d4c]">
                        {label}
                    </span>
                </div>
                <p className="text-[11px] font-semibold">{task}</p>
            </div>
            <p className="text-[9px] font-bold text-[#152744]">{date}</p>
        </div>
    );
}