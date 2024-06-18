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
                <div>
                    <h2 className="text-[#142d4c] font-extrabold text-[25px] text-wrap">{school}</h2>
                    <h2>Programme: {programme}</h2>
                    <h2>Level: {level}</h2>
                </div>
            </div>
        </div>
    );
}