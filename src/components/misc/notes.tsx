"use client";

import NoteCard from "../cards/NoteCard";

interface notesComponentProps {
  notes: {
    id: string;
    folderId: string;
    title: string;
    authorId: string;
  }[];
}

export default function NotesComponent({ notes }: notesComponentProps) {
  return (
    <div className="flex flex-col h-full pr-5 gap-6">
      {notes && notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          folderId={note.folderId}
          title={note.title}
          authorId={note.authorId}
        />
      ))}
    </div>
  );
}
