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
            <Avatar showFallback isBordered radius="full" src={friendImage} size="sm" className='cursor-pointer bg-slate-300 h-[25px] w-[25px]'> 
            </Avatar>    
            <p>{firstName + " " + lastName}</p>   
            <Button size="sm" className="underline bg-[#393e46] text-white">follow</Button> 
        </div>
    );
}