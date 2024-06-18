"use client";
import Image from "next/image";
import Link from "next/link";

interface Props {
    imageUrl: string;
    link: string;
    title: string;
    description: string;
    loader: any;
}

export default function ThreadCard1({ imageUrl, link, title, description, loader }: Props) {
    return (
        <div className="bg-white shadow-md shadow-slate-600 p-[12px] rounded-sm grid gap-[10px] justify-between hover:shadow-lg hover:shadow-slate-700 transition duration-200 min-h-[286px]" style={{ gridTemplateColumns: "1fr" }}>
            <div className="relative h-[150px] cursor-pointer overflow-hidden">
                <Image 
                    src={imageUrl} 
                    alt=""  
                    className="h-full w-full object-cover rounded-sm"
                    fill
                    loader={loader}
                    unoptimized
                />
            </div>
            <div className="text-neutral-600 hover:translate-y-2 transition duration-200">
                <h2 className="font-extrabold text-[#142d4c] text-[14px] truncate-text">{title}</h2>
                <p className="text-left text-[12px] text-black truncate-text">{description}</p>
            </div>
            <div className="flex gap-1 justify-end">
                <Image src="/assets/filled-bookmark-icon.svg" alt="bookmark" width={16} height={16} className="cursor-pointer" />
                <Link href={link} className="cursor-pointer">
                    <Image src="/assets/external-link.svg" alt="external link" width={16} height={16} />
                </Link>
            </div>
        </div>
    );
}
