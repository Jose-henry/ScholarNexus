"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
    imageUrl: any;
    w: number;
    h: number;
    link: string;
    title: string;
    description: string;
    loader: any;
};

export default function ThreadCard1({ imageUrl, w, h, link, title, description, loader }: Props) {
    return (
        <div className="bg-white shadow-md shadow-slate-600 p-[12px] rounded-sm grid gap-[10px] justify-between hover:shadow-lg hover:shadow-slate-700 transition duration-200" style={{ gridTemplateColumns: "1fr"}}>
            <div className="h-[150px] cursor-pointer overflow-hidden">
                <Image 
                    src={imageUrl} 
                    alt=""  
                    width={w} 
                    height={h}  
                    className="h-full w-full object-cover rounded-sm"
                    layout="responsive"
                    loader={loader}
                    unoptimized
                />
            </div>

            <div className="text-neutral-600 hover:translate-y-2 transition duration-200 h-[80px] overflow-hidden">
                <h2 className="font-extrabold text-[#142d4c] text-[14px] truncate">{title}</h2>
                <p className="text-left text-[12px] text-black overflow-hidden overflow-ellipsis whitespace-nowrap">{description}</p>
            </div>
            <div className="flex gap-1 justify-end">
                <Image src="/assets/filled-bookmark-icon.svg" alt="" width={16} height={16} className="cursor-pointer"></Image>
                <Link href={link} className="cursor-pointer">
                    <Image src="/assets/external-link.svg" alt="" width={16} height={16}></Image>
                </Link>
            </div>
        </div>
    );
}
