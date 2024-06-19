'use server'

import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import Modal from "@/components/misc/modal";
import { Suspense } from "react";
import { NoteForm } from "@/components/forms/NoteForm";

export default async function CreateFolderPage({ params }: { params: { id: string, nid: string } }) {
  const User = await currentUser();
  if (!User) return null; // to avoid typesscript warnings
  
  const userInfo = await getUserByClerkId(User?.id);


  const formData = {
    id: params.nid,
    title: "",
    content: "",
    authorId: userInfo?.id as string,
    folderId: params.id,

  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Modal>
      <main className='mx-auto grid w-[900px] justify-start h-[650px] rounded-md overflow-hidden shadow-lg border border-[#e3e3e3]'>
      <Suspense fallback={<div>Loading...</div>}>
        <NoteForm note={formData} btnTitle='Continue' />
      </Suspense>
      </main>
    </Modal>
    </Suspense>
  );
}
