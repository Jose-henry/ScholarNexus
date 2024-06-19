"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import NoteCard from "../cards/NoteCard";


/* id: string;
    folderId: string;
    title: string;
    userId : string; */
interface notesComponentProps {
  notes: {
    id: string;
    folderId: string;
    title: string;
    authorId: string; // Include authorId in the type definition
  }[];
}

export default function NotesComponent({ notes }: notesComponentProps) {
  const Router = useRouter();

  const onClick = () => {
    Router.push("/folders/1");
  };

  return (
        <>
            {/* Render folder cards here */}
            {notes && notes.map((note) => (
              <NoteCard
                key={note.id}
                id={note.id}
                folderId={note.folderId}
                title={note.title}
                authorId={note.authorId} // Pass createdById as userId
              />
            ))}
            </>
     
  );
}