"use client"

import Image from "next/image"

export default function AnalyticsCard() {
    return (
        <div className="w-[100%] h-[250px] grid grid-cols-3 gap-5"> 
            <div className="shadow-sm flex justify-between items-center rounded-sm bg-[#132743]">
                <Image width="200" height="200" src="/assets/task-img2.png" alt="task" />
                <div className="pr-3 ml-[-20px]">
                    <div>
                        <h2 className="font-bold mb-2 text-center text-white text-[16.5px]">Keep all your tasks organized🎉</h2>
                        <p className=" text-[13.5px] text-center text-white mt-[-4px]">"The purpose of organization is to help you achieve your goals and reduce stress, not to create more work for yourself."</p>
                    </div>
                    <p className="text-[13px] mt-2 font-bold text-center text-white">~ Laura Leist</p>
                </div>
            </div>
            <div className="shadow-md bg-white rounded-sm"></div>
            <div className="shadow-md bg-white rounded-sm"></div>
        </div>
    );
}