"use client"

import {Avatar} from 
"@nextui-org/avatar";
import Image from "next/image";

interface Props {
    bio: string;
}

export default function BioCard({bio}: Props) {
    return (
        <div className="rounded-sm bg-white shadow-md p-4"> 
            <h2 className="font-bold text-[15px]">About</h2>
            <p className="pt-3">{bio}</p>
        </div>
    );
}