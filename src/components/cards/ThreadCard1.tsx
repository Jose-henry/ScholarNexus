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
        <div className="bg-gray-400 rounded-[10px] relative overflow-hidden">
            <Image 
                src={imageUrl} 
                alt=""  
                width={w} 
                height={h}  
                placeholder="blur" 
                blurDataURL={blurDataURL} 
                className="absolute w-full h-full object-cover top-0 left-0" 
            />
        </div>
    );
}