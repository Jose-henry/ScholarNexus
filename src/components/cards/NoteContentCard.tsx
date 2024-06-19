"use client"

interface Props {
    id: string;
    content: string;
    title: string;
    folderId: string;
    authorId : string;
}

export default function NotesCard({id, content, title, folderId, authorId }: Props) {
    return (
       
        <div className="w-fit">
            <h1 className="text-[11px] font-semibold text-center">{title}</h1>
            <p className="text-[11px] font-semibold text-left">{content}</p>   
        </div>
        
    );
}