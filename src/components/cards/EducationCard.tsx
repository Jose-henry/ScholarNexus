"use client"

import {Avatar} from 
"@nextui-org/avatar";
import Image from "next/image";

interface Props {
    programme: string;
    school: string;
    level: string;
}

export default function EducationCard({programme, school, level}: Props) {
    return (
        <div className="rounded-sm bg-white shadow-md p-4 flex flex-col gap-2"> 
            <h2 className="font-bold text-[15px]">Education</h2>
            <div className="flex items-center gap-4">
                <Image src="/assets/edu-pic.svg" width={150} height={150} alt="education"></Image>
                <div className="flex flex-col gap-2">
                    <h2 className="text-[#142d4c] font-extrabold text-[20px]">School: <span className="font-semibold text-black">{school}</span></h2>
                    <h2 className="text-[#142d4c] font-extrabold text-[20px]">Programme: <span className="font-semibold text-black">{programme}</span></h2>
                    <h2 className="text-[#142d4c] font-extrabold text-[20px]">Level: <span className="font-semibold text-black">{level}</span></h2>
                </div>
            </div>
        </div>
    );
}