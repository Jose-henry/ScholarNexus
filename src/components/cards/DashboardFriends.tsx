"use client"

import Image from "next/image";
import FriendDashboard from "../ui/friendDashboard";

export default function DashboardFriends() {
    return (
        <div className="w-[100%] h-[200px] bg-[#fbfbfb] rounded-[2px] cursor-pointer shadow-md shadow-black p-3 flex flex-col justify-between">
            <div className="flex gap-1 items-center">
                <h2 className="text-[12.5px] text-[#070f4e] font-extrabold">Friend Suggestions</h2>
                <Image width="18" height="18" src="/assets/friends-icon.svg" alt="deselect"/>
            </div>
            <div className="w-full h-[88%] bg-[#f2f2f2] shadow-md shadow-[#50595c]">
                
                <div>

                </div>
            </div>
        </div>
    );
}