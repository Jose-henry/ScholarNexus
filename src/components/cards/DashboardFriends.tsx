"use client"

import Image from "next/image";
import FriendDashboard from "../ui/friendDashboard";
import Link from "next/link";

export default function DashboardFriends() {
    return (
        <div className="w-[100%] h-[200px] bg-[#fbfbfb] rounded-[2px] cursor-pointer shadow-md shadow-black p-3 flex flex-col justify-between">
            <div className="flex gap-1 items-center justify-between">
                <div className="flex gap-1 justify-between items-center">
                    <Image width="16" height="16" src="/assets/follow-icon.svg" alt="friend"/>
                    <h2 className="text-[12px] text-[#070f4e] font-bold">Friend Suggestions</h2>
                </div>
                <Link href="/groups" aria-label="" className="underline text-[10px] hover:no-underline font-semibold">Find more</Link>
            </div>
            <div className="w-full h-[85%] bg-[#f2f2f2] shadow-md shadow-[#50595c] flex flex-col justify-between p-2">
                <FriendDashboard firstName="John" lastName="Doe" programme="Aerospace Engineering" friendImage="/assets/friend1.png"/>
                <FriendDashboard firstName="Jane" lastName="Piper" programme="Mechanical Engineering" friendImage="/assets/friend1.png"/>
                <FriendDashboard firstName="Marywell" lastName="Wilder" programme="Law &Justice" friendImage="/assets/friend1.png"/>
            </div>
        </div>
    );
}