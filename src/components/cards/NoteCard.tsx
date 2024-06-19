"use client"

import Image from "next/image";
import Link from "next/link";



interface Props {
    id: string;
    folderId: string;
    title: string;
    authorId : string;
}

export default function NotesCard({id, title, authorId, folderId }: Props) {
    return (
       
            <div className="w-fit flex">
                <Link href={`/folders/${folderId}/notes/${id}`}>
                <Image src="/assets/file.svg" alt="folder" width={60} height={60} />
                </Link>
                <h2 className="text-[11px] font-semibold text-center">{title}</h2>
              </div>
        
    );
}