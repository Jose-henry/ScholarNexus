"use client"
import { Avatar } from "@nextui-org/avatar";


export default function UserWelcomeCard() {
    return (
        <div className="flex flex-col items-center gap-1">
            <Avatar isBordered showFallback color="secondary" className="w-20 h-20 text-large mb-[10px]  cursor-pointer" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <h3 className="text-slate-300 font-[1000]">Goodmorning Ella!</h3>
            <p className="text-slate-300">Keep the learning going!</p>
        </div>
    );
}