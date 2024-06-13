"use client"

import {Avatar} from 
"@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface Props {
    firstName: string;
    lastName: string;
    level: string;
    friendImage: string;
}

export default function FriendDashboard({firstName, lastName, level, friendImage}: Props) {
    return (
        <div className="bg-gray-400 w-[100%] cursor-pointer rounded-[3px] flex justify-between p-1 pl-2 pr-2"> 
            <div className="flex gap-2 items-center">
                <Avatar showFallback isBordered radius="full" src={friendImage} size="sm" className='cursor-pointer bg-slate-300 h-[22px] w-[22px]'> 
                </Avatar>    
                <div>
                    <p className="text-[11px] font-bold">{firstName + " " + lastName}</p>
                    <p className="text-[10px]">{level} level</p>
                </div> 
            </div>
            <Button size="lg" className="underline text-[10px] text-[#070f4e] font-semibold hover:no-underline">follow</Button>
        </div>
    );
}