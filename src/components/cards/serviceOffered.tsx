"use client"

import {Avatar} from 
"@nextui-org/avatar";
import Image from "next/image";

interface Props {
    jobTitle: string;
    jobNote: string;
    creationDate: any;
    deadline: any;
}

export default function ServiceOffered({jobTitle, jobNote, creationDate, deadline}: Props) {
    return (
        <div className="w-full flex gap-2 items-start"> 
            <Image src="/assets/dot.svg" alt="" height={30} width={30} />
            <div className="rounded-sm bg-[#f8f8f8] border-[1px] border-[#5f6769] shadow-sm p-2">
                <h2 className="font-bold text-[14px]">{jobTitle}</h2>
                <p className="text-[13px]">{jobNote}</p>
                <div className="flex justify-end gap-2 items-center mt-1">
                    <p className="font-bold text-[12px]">posted: <span className="font-medium text-[11px]">{creationDate}</span></p>
                    <p className="font-bold text-[12px]">deadline: <span className="font-medium text-[11px]">{deadline}</span></p>
                </div>
            </div>
        </div>
    );
}