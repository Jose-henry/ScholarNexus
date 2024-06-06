"use client"
import Image from "next/image";

interface Props {
    imageUrl:string;
    w: any;
    h: any;

};

export default function ThreadCard1({imageUrl, w, h}:Props) {
    return (
        <div className="bg-gray-400 rounded-[3px] relative overflow-hidden">
            <Image src={imageUrl} alt=""  width={w} 
        height={h} className="absolute w-full h-full object-cover top-0 left-0"
 ></Image>
        </div>
    );
}