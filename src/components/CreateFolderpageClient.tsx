// src/components/CreateFolderPageClient.tsx
'use client';

import { useEffect } from 'react';
import { useNoteContext } from '@/context/NoteContext';
import Modal from "@/components/misc/modal";
import { NoteForm } from "@/components/forms/NoteForm";

interface CreateFolderPageClientProps {
  formData: {
    id: string;
    title: string;
    content: string;
    authorId: string;
    folderId: string;
  };
}

export default function CreateFolderPageClient({ formData }: CreateFolderPageClientProps) {
  const { setNid } = useNoteContext();

  useEffect(() => {
    setNid(formData.id);
  }, [formData.id, setNid]);

  return (
    <Modal>
      <main className='mx-auto grid w-[900px] justify-start h-[650px] rounded-md overflow-hidden shadow-lg border border-[#e3e3e3]'>
        <NoteForm note={formData} btnTitle='Continue' />
      </main>
    </Modal>
  );
}
