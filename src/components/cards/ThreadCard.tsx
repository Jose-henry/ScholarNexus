"use server"

import Image from "next/image";

interface Props {
    videoUrl:string;

};

export default  async function ThreadCard({videoUrl}:Props) {
    return (
        <div className="gap-[10px] bg-black opacity-80 p-[12px] grid rounded-xl justify-between op hover:shadow-xl transition duration-200 hover:shadow-black " style={{ gridTemplateColumns: "1fr"}}>
            <div className="h-[150px] cursor-pointer">
                <video src={videoUrl} controls autoPlay loop muted className="h-full w-full object-cover rounded-xl"></video>
            </div>
            <div className="text-neutral-600 hover:translate-x-4 transition duration-200">
            <h2 className="font-black">The Dawn of Innovation</h2>
            <p className="text-left text-sm">Explore the birth of groundbreaking ideas and inventions.</p>
            </div>
            <Image src="/assets/bookmark.svg" alt="" width={20} height={20} className="justify-self-end cursor-pointer"></Image>
        </div>
    );
}



