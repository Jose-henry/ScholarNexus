'use server'

import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { FolderForm } from "@/components/forms/folderForm";
import Modal from "@/components/misc/modal";

export default async function CreateFolderPage({ params }: { params: { id: string } }) {
  const User = await currentUser();
  if (!User) return null; // to avoid typescript warnings
  
  const userInfo = await getUserByClerkId(User?.id);

  const formData = {
    folderName: "",
    category: "",
    userId: userInfo?.id as string,
  };

  return (
    <Modal>
      <main className='mx-auto grid w-[900px] justify-start h-[650px] rounded-md overflow-hidden shadow-lg border border-[#e3e3e3]'>
        <FolderForm folder={formData} btnTitle='Continue' />
      </main>
    </Modal>
  );
}