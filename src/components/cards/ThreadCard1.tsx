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
        <div className=" bg-black opacity-80 p-[12px] rounded-xl grid gap-[10px] justify-between hover:shadow-xl hover:shadow-black transition duration-200 " style={{ gridTemplateColumns: "1fr"}}>
            <div className="h-[150px] cursor-pointer">
            <Image 
                src={imageUrl} 
                alt=""  
                width={w} 
                height={h}  
                placeholder="blur" 
                blurDataURL={blurDataURL} 
                className="h-full w-full object-cover rounded-xl"
                
            />
            </div>


            <div className="text-neutral-600 hover:translate-x-4 transition duration-200">
            <h2 className="font-black">The Dawn of Innovation</h2>
            <p className="text-left text-sm ">Explore the birth of groundbreaking ideas and inventions.</p>
            </div>
            <Image src="/assets/bookmark.svg" alt="" width={20} height={20} className="justify-self-end cursor-pointer"></Image>
        </div>
    );
}