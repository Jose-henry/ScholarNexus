"use client"

import {Avatar} from 
"@nextui-org/avatar";
import Image from "next/image";

interface Props {
}

export default function UserNotesCard() {
    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3 flex flex-col gap-2"> 
            <h2 className="text-[14px] font-bold">Notes</h2>
            <div className=" border border-black">

            </div>
        </div>
    );
}