"use client"
import { Avatar } from "@nextui-org/avatar";


export default function UserWelcomeCard() {
    return (
        <div className="flex flex-col items-center gap-1">
            <Avatar isBordered showFallback color="secondary" className="w-20 h-20 text-large mb-[10px] cursor-pointer" src="(link unavailable)" />
            <h3 className="text-[#eef2e2] font-[1000] text-[21px]">Welcome Ella!</h3>
            <p className="text-white text-[14px] mt-[-3px]">Keep the learning going!</p>
        </div>
    );
}