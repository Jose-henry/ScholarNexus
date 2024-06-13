"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardTask() {
    const router = useRouter();
    return (
        <div className="w-[100%] h-[200px] bg-[#fbfbfb] rounded-[2px] cursor-pointer shadow-md shadow-black p-3 flex flex-col justify-between"> 
            <div className="flex gap-1 items-center">
                <div className="flex gap-1 items-center">
                    <Image width="16" height="16" src="/assets/task-icon.svg" alt="task"/>
                    <h2 className="text-[12.5px] text-[#070f4e] font-extrabold">Tasks</h2>
                </div>
                <Link href="/tasks" aria-label=""></Link>
            </div>
            <div className="w-full h-[85%] bg-[#f2f2f2] shadow-md shadow-[#50595c]">

            </div>
        </div>
    );
}