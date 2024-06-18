'use server'

import { getUserByClerkId } from "@/lib/actions/user.action";


import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import { FolderForm } from "@/components/forms/folderForm";
import { getFolders } from "@/lib/actions/folder.action";



export default async function Onboarding() {

    const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings

    
  
    const userInfo = await getUserByClerkId(User?.id);

    //const folders = await getFolders(userInfo?.id as string);



       
  const formData = {
        folderName: "",
        category: "",
        userId: userInfo?.id as string,
    };

    return (
        
          <main className='mx-auto grid w-[900px] justify-start h-[650px] rounded-md  overflow-hidden shadow-lg border border-[#e3e3e3]'>
            
              <FolderForm folder={formData} btnTitle='Continue'/>
    
          </main>
    
  )
  }
    