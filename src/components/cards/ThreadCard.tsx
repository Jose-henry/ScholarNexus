"use server"

import Image from "next/image";

interface Props {
    videoUrl:string;

};

export default  async function ThreadCard({videoUrl}:Props) {
    return (
        <div className="gap-[10px] bg-white shadow-md shadow-slate-600 p-[12px] grid rounded-sm justify-between op hover:shadow-lg hover:shadow-slate-700 transition duration-200 " style={{ gridTemplateColumns: "1fr"}}>
            <div className="h-[150px] cursor-pointer">
                <video src={videoUrl} controls autoPlay loop muted className="h-full w-full object-cover rounded-sm"></video>
            </div>
            <div className="text-neutral-600 hover:translate-y-2 transition duration-200">
                <h2 className="font-bold text-black text-[14.5px]">The Dawn of Innovation</h2>
                <p className="text-left text-[12.5px] text-black">Explore the birth of groundbreaking ideas and inventions in the phenomenal world of tech!</p>
            </div>
            <Image src="/assets/bookmark-icon.svg" alt="" width={18} height={18} className="justify-self-end cursor-pointer"></Image>
        </div>
    );
}