'use server'

import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { FolderForm } from "@/components/forms/folderForm";
import Modal from "@/components/misc/modal";
import { Suspense } from "react";

export default async function CreateFolderPage({ params }: { params: { id: string } }) {
  const User = await currentUser();
  if (!User) return null; // to avoid typescript warnings
  
  const userInfo = await getUserByClerkId(User?.id);

  const formData = {
    folderName: "",
    category: "",
    createdById: userInfo?.id as string,
    parentFolderId: null,
  };

  return (
    <Modal>
      <main className='mx-auto grid w-[900px] justify-start h-[650px] rounded-md overflow-hidden shadow-lg border border-[#e3e3e3]'>
        <Suspense fallback={<div>Loading...</div>}>
          <FolderForm folder={formData} btnTitle='Continue' />
        </Suspense>
      </main>
    </Modal>
  );
}
