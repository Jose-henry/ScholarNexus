"use client"

import Image from "next/image";
import Link from "next/link";



interface Props {
    id: string;
    folderId: string;
    title: string;
    authorId: string;
    folderName: string; // Add folderName to Props
  }

export default function NoteCard({ id, folderId, title, authorId, folderName }: Props) {
            return (
              <div className="note-card">
                <h2>{title}</h2>
                <p>Folder: {folderName}</p>
                <p>Author: {authorId}</p>
       
        <div className="w-fit">
                <Link href={`/folders/${folderId}/notes/${id}`}>
                <Image src="/assets/file.svg" alt="folder" width={60} height={60} />
                </Link>
                <h2 className="text-[11px] font-semibold text-center">{title}</h2>
              </div>
              </div>
        
    );
}