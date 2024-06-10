"use server"

import Image from "next/image";

interface Props {
    videoUrl:string;

};

export default  async function ThreadCard({videoUrl}:Props) {
    return (
        <div className="gap-[10px] bg-black opacity-80 p-[12px] grid rounded-sm justify-between op hover:shadow-lg hover:shadow-slate-600 transition duration-200 " style={{ gridTemplateColumns: "1fr"}}>
            <div className="h-[150px] cursor-pointer">
                <video src={videoUrl} controls autoPlay loop muted className="h-full w-full object-cover rounded-sm"></video>
            </div>
            <div className="text-neutral-600 hover:translate-y-2 transition duration-200">
            <h2 className="font-bold text-[#eeeeee]">The Dawn of Innovation</h2>
            <p className="text-left text-[12.5px] text-[#f2f2f2]">Explore the birth of groundbreaking ideas and inventions in the phenomenal world of tech!</p>
            </div>
            <Image src="/assets/bookmark.svg" alt="" width={20} height={20} className="justify-self-end cursor-pointer"></Image>
        </div>
    );
}