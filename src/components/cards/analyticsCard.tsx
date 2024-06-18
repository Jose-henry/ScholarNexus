"use client"

import Image from "next/image";

export default function AnalyticsCard() {
    return (
        <div className="w-[100%] h-[250px] grid grid-cols-3 gap-5"> 
            <div className="shadow-sm flex justify-between items-center rounded-sm bg-[#132743]">
                <Image width="150" height="250" src="/assets/task-illustration.svg" alt="task"/>
                <div className="px-2">
                    <div>
                        <h2 className="font-bold mb-2 text-center text-white">Keep all your tasks organized🎉</h2>
                        <p className=" text-[13px] text-center text-white">"The purpose of organization is to help you achieve your goals and reduce stress, not to create more work for yourself."</p>
                    </div>
                    <p className="text-[13px] mt-2 font-semibold text-center text-white">~ Laura Leist</p>
                </div>
            </div>
            <div className="shadow-sm bg-white rounded-sm"></div>
            <div className="shadow-sm bg-white rounded-sm"></div>
        </div>
    );
}