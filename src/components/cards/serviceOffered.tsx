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
        <div className="rounded-sm bg-white border border-black shadow-sm p-2 w-full"> 
            <h2>{jobTitle}</h2>
            <p>{jobNote}</p>
            <div className="flex justify-end gap-2 items-center">
                <p>{creationDate}</p>
                <p>{deadline}</p>
            </div>
        </div>
    );
}