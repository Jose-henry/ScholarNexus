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
        <div className="bg-gray-400 w-[100%] border-dark-400  cursor-pointer rounded-[3px] border border-black flex justify-between"> 
            <div>
                <Avatar showFallback isBordered radius="full" src={friendImage} size="sm" className='cursor-pointer bg-slate-300 h-[18px] w-[18px]'> 
                </Avatar>    
                <div>
                    <p className="text-[12px] font-bold">{firstName + " " + lastName}</p>
                    <p className="text-[12px]">{level}</p>
                </div> 
            </div>
            <div>
                <Button size="lg" className="underline text-[12px]">follow</Button>
                <Image width="16" height="16" src="/assets/follow-icon.svg" alt="follow"/>
            </div>
        </div>
    );
}