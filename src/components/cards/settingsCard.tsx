"use client"

import Image from "next/image";

export default function SettingsCard() {
    return (
        <div className="w-[200px] h-[150px] bg-[#d9dad7] fixed right-2 top-[50px] z-10 px-3 py-2 flex flex-col gap-1 shadow-sm shadow-[#393e46]">
            <div>
                <h2 className="text-[11.5px] font-bold text-[#233142]">Change theme:</h2>
            </div>
            <div>
                <h2 className="text-[11.5px] font-bold text-[#233142]">Language:</h2>
            </div>
        </div>
    );
}