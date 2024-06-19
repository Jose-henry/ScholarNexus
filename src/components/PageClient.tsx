// src/components/PageClient.tsx
'use client';

import { useEffect } from 'react';
import { useNoteContext } from '@/context/NoteContext';
import NotesComponent from "@/components/misc/notes";
import FoldersSubComponent from "@/components/misc/subFolders";

interface PageClientProps {
  folders: any;
  notes: any;
  parentFolderId: string;
}

export default function PageClient({ folders, notes, parentFolderId }: PageClientProps) {
  const { nid } = useNoteContext();

  // Provide a default value for nid if it is null
  const nidValue = nid || 'default_nid_value'; // replace 'default_nid_value' with a suitable default value

  return (
    <>
      <FoldersSubComponent folders={folders} parentFolderId={parentFolderId} nid={nidValue} />
      <NotesComponent notes={notes} />
    </>
  );
}
