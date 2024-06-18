"use client"

import {Avatar} from 
"@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface Props {
    task: string;
    date: any;
}

export default function NameCard({task, date}: Props) {
    return (
        <div className="flex bg-white border-b-[1px] border-b-[#dee1ec] px-2 py-1 shadow-sm justify-between items-center "> 
            <div className="flex gap-2">
                <p className="text-[11px] font-semibold">{task}</p>
            </div>
            <p className="text-[9px] font-bold text-[#152744]">{date}</p>
        </div>
    );
}