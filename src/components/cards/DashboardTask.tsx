"use client"

import Image from "next/image";
import Link from "next/link";
import { ComboboxDropdownMenu } from "../forms/toDo";
import TaskDashboard from "../ui/taskDashboard";

export default function DashboardTask() {
    return (
        <div className="w-[100%] h-[200px] bg-white rounded-[2px] cursor-pointer shadow-md shadow-black p-3 flex flex-col justify-between"> 
            <div className="flex gap-1 items-center justify-between">
                <div className="flex gap-1 items-center">
                    <Image width="16" height="16" src="/assets/toDo-icon.svg" alt="task"/>
                    <h2 className="text-[12px] text-[#070f4e] font-bold">Tasks</h2>
                </div>
                <Link href="/tasks" aria-label="" className="underline text-[10px] hover:no-underline font-semibold">View all</Link>
            </div>
            <div className="w-full h-[85%] bg-[#fafafa] shadow-md shadow-[#929aab] p-2">
                <TaskDashboard task="Read for exams." date="12/3/24" />
                <TaskDashboard task="See Dr Azu and submit paperwork." date="20/3/24" />
                <TaskDashboard task="Meet course-rep submit and col..." date="22/3/24" />
                <TaskDashboard task="Meet course-rep submit and col..." date="22/3/24" />
            </div>
        </div>
    );
}