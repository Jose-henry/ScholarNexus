import { Metadata } from "next";
import { ProfileForm } from "@/components/forms/ProfileForm";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { SignedIn } from "@clerk/nextjs";



import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";


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
    if (userInfo?.onboarded === true && userInfo?.interests?.length > 0) redirect("/home");
    

    



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
        <main className='mx-auto grid w-[900px] justify-start h-[650px] rounded-sm grid-cols-2 overflow-hidden shadow-lg border border-[#e3e3e3]'>
          <div className="bg-[#393e46] flex items-center justify-center">
            <Image width="250" height="250" src="/assets/onboard-logo.svg" alt="education" />
          </div>
          <div className="p-[15px] pl-[20px] overflow-scroll bg-[#f7f7f2]">
            <div className="flex gap-1 items-center justify-center">
              <p className='mt-3 text-base-regular text-light-2 text-center border-b-[1px] border-b-solid border-b-gray-400 pb-2 text-[13px] font-medium'>
                  Complete your profile now, to use Scholar Nexus. 
              </p>
              <Image width="22" height="22" src="/assets/party-icon.svg" alt="education"/>
            </div>
            
            <section className='mt-9 bg-dark-2'>
            <ProfileForm user={formData} btnTitle='Continue'/>
            </section>
          </div>
        </main>
  </SignedIn>
)
}