"use client"

import {Avatar} from 
"@nextui-org/avatar";
import Image from "next/image";

interface Props {
    firstName: string;
}

export default function JobCard({firstName}: Props) {
    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3"> 
            <div className="flex items-center gap-0">
                <div>
                    <Image width="17" height="17" className="mr-2 cursor-pointer" src="/assets/info.svg" alt="search" />
                    <p>Explore services offered and requested by {firstName}.</p>
                </div>
                <h2 className="text-[14px] font-bold">Job</h2>
            </div>
            <div>

            </div>
        </div>
    );
}