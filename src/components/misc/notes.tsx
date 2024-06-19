"use client";
// notes.tsx
import NoteCard from "../cards/NoteCard";

interface NotesComponentProps {
  folders: {
    id: string;
    folderName: string;
    category: string;
    createdById: string;
  }[];
  notes: {
    id: string;
    folderId: string;
    title: string;
    authorId: string;
  }[];
}

export default function NotesComponent({ folders, notes }: NotesComponentProps) {
  return (
    <>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          folderId={note.folderId}
          title={note.title}
          authorId={note.authorId}
          folderName={getFolderNameById(note.folderId, folders)} // Example function to get folderName from folders
        />
      ))}
    </>
  );
}

// Example function to retrieve folderName based on folderId
function getFolderNameById(folderId: string, folders: any[]): string {
  const folder = folders.find((folder) => folder.id === folderId);
  return folder ? folder.folderName : "Unknown Folder";
}
