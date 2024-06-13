"use client"

import {Avatar} from 
"@nextui-org/avatar";
import { Button } from "@nextui-org/button";

interface Props {
    firstName: string;
    lastName: string;
    friendImage: string;
}
export default function FriendDashboard({firstName, lastName, friendImage}: Props) {
    return (
        <div className="bg-gray-400 w-[100%] border-dark-400  cursor-pointer rounded-[3px] inline-block"> 
            <Avatar showFallback isBordered radius="full" src={friendImage} size="sm" className='cursor-pointer bg-slate-300 h-[18px] w-[18px]'> 
            </Avatar>    
            <p className="text-[12px]">{firstName + " " + lastName}</p>   
            <Button size="lg" className="underline bg-[#393e46] text-white text-[12px]">follow</Button> 
        </div>
    );
}