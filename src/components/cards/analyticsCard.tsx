"use client"

import Image from "next/image";

export default function AnalyticsCard() {
    return (
        <div className="w-[100%] h-[200px] grid grid-cols-3 gap-5"> 
            <div className="border shadow-md shadow-[#929aab] bg-white border-[#f4f4f4] flex justify-between items-center">
                <Image width="200" height="200" src="/assets/task-illustration.svg" alt="health"/>
                <div className="pr-3">
                    <div>
                        <h2 className="font-bold mb-2">Keep all your tasks organize 🎉</h2>
                        <p className=" text-[13px]">"The purpose of organization is to help you achieve your goals and reduce stress, not to create more work for yourself."</p>
                    </div>
                    <p className="text-[13px] mt-1 font-semibold">~ Laura Leist</p>
                </div>
            </div>
            <div className="border shadow-md bg-white  shadow-[#929aab] border-[#f4f4f4]"></div>
            <div className="border shadow-md bg-white shadow-[#929aab] border-[#f4f4f4]"></div>
        </div>
    );
}