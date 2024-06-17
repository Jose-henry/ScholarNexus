"use client"

import {Avatar} from 
"@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import ToDoBtn from "../forms/toDoBtn";
import HomeToDoBtn from "../forms/homeToDoBtn";

interface Props {
    task: string;
    date: any;
}

export default function TaskDashboard({task, date}: Props) {
    return (
        <div className="flex bg-white border-b-[1px] border-b-[#dee1ec] p-3 pr-2 shadow-sm pl-3 justify-between items-center "> 
            <div className="flex gap-2">
                <HomeToDoBtn />
                <p className="text-[11px] font-semibold">{task}</p>
            </div>
            <p className="text-[9px] font-bold text-[#152744]">{date}</p>
        </div>
    );
}