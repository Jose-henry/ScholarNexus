"use client"

import Image from "next/image";

export default function NotificationCard() {
    return (
        <div className="w-[200px] h-[150px] rounded-sm shadow-md bg-gray-800 fixed right-2 top-[50px] z-10 p-2">
            <div className="flex items-center gap-1">
                <h2 className="text-white text-[13px] font-bold">Change theme:</h2>
                <Image src="/assets/theme.svg" height={30} width={30} alt="switch"></Image>
            </div>
            <div>
                <h2 className="text-white text-[13px] font-bold">Language:</h2>
            </div>
        </div>
    );
}