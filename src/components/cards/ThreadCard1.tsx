"use client"
import Image from "next/image";

interface Props {
    imageUrl: any;
    w: number;
    h: number;
    blurDataURL: string;
};

export default function ThreadCard1({ imageUrl, w, h, blurDataURL }: Props) {
    return (
        <div className="bg-white shadow-md shadow-slate-600 p-[12px] rounded-sm grid gap-[10px] justify-between hover:shadow-lg hover:shadow-slate-700 transition duration-200 " style={{ gridTemplateColumns: "1fr"}}>
            <div className="h-[150px] cursor-pointer">
            <Image 
                src={imageUrl} 
                alt=""  
                width={w} 
                height={h}  
                placeholder="blur" 
                blurDataURL={blurDataURL} 
                className="h-full w-full object-cover rounded-sm"
                
            />
            </div>


            <div className="text-neutral-600 hover:translate-y-2 transition duration-200">
            <h2 className="font-bold text-black text-[14.5px]">The Dawn of Innovation</h2>
            <p className="text-left text-[12.5px] text-black">Explore the birth of groundbreaking ideas and inventions in the phenomenal world of tech!</p>
            </div>
            <Image src="/assets/filled-bookmark-icon.svg" alt="" width={18} height={18} className="justify-self-end cursor-pointer"></Image>
        </div>
    );
}