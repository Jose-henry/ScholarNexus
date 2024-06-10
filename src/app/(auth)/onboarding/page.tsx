import { Metadata } from "next";
import { ProfileForm } from "@/components/forms/ProfileForm";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { SignedIn } from "@clerk/nextjs";



import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


/* Todo: in profile component
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const router = useRouter()
  useEffect(() => {
    router.push('/onboarding/interest')
  }, [router])
 */



export const metadata: Metadata = {
  title:"Onboarding" };


export default async function Onboarding() {

    const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings

    
  
    const userInfo = await getUserByClerkId(User?.id);
    if (userInfo?.onboarded) redirect("/home");



    /* 
    interface Props{
  user: {
      clerkId: any;
      username: string;
      email: any;
      firstName: string;
      lastName: string;
      middleName: string;
      dateOfBirth: Date;
      programme: string;
      school: string;
      level: string;
      image: string;
      bio: string;
  };
  btnTitle: string;
}
    */

    
  const formData = {
    clerkId: User?.id || "",
    username: userInfo?.username || User?.username || "",
    email: User?.emailAddresses[0].emailAddress || userInfo?.email || "",
    firstName: userInfo?.firstName || User?.firstName || "",
    lastName: userInfo?.lastName || User?.lastName || "",
    middleName: userInfo?.middleName || "",
    dateOfBirth: userInfo?.dateOfBirth || new Date(),
    programme: userInfo?.programme || "",
    school: userInfo?.school || "",
    level: userInfo?.level || "",
    image: userInfo?.image || User?.imageUrl || "",
    bio: userInfo?.bio || "",
    };

  


    return (
      <SignedIn>
      <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
      <h1 className='head-text'>Onboarding</h1>
      <p className='mt-3 text-base-regular text-light-2'>
          Complete your profile now, to use Scholar Nexus.
      </p>
      
       <section className='mt-9 bg-dark-2 p-10'>
      <ProfileForm user={formData} btnTitle='Continue'/>
      </section>
      </main>
  </SignedIn>
);
}