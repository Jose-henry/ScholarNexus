"use client"

import Image from "next/image";
import Link from "next/link";



interface Props {
    id: string;
    folderName: string;
    category: string;
    userId : string;
}

export default function FoldersCard({id, folderName, category, userId }: Props) {
    return (
       
        <div className="w-fit">
                <Link href={`/folders/${id}/folder/${id}`}>
                <Image src="/assets/folder-icon.svg" alt="folder" width={60} height={60} />
                </Link>
                <h2 className="text-[11px] font-semibold text-center">{folderName}</h2>
              </div>
        
    );
}