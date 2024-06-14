"use client"

import {Avatar} from 
"@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface Props {
    firstName: string;
    lastName: string;
    programme: string;
    friendImage: string;
}

export default function FriendDashboard({firstName, lastName, programme, friendImage}: Props) {
    return (
        <div className="bg-[#ffe9e3] w-[100%] cursor-pointer rounded-[3px] flex justify-between p-1 pl-2 pr-2 shadow-sm shadow-black items-center"> 
            <div className="flex gap-2 items-center">
                <Avatar showFallback isBordered radius="full" src={friendImage} size="sm" className='cursor-pointer bg-slate-300 h-[22px] w-[22px]'> 
                </Avatar>    
                <div>
                    <p className="text-[11px] font-bold">{firstName + " " + lastName}</p>
                    <p className="text-[10px]">{programme}</p>
                </div> 
            </div>
            <Button size="lg" className="underline text-[10px] text-white font-semibold hover:no-underline bg-[#142d4c] rounded-full">follow</Button>
        </div>
    );
}