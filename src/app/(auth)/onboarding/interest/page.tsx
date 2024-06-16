
import React from "react";

import { redirect} from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { Metadata } from "next";
import InterestForm from "@/components/forms/interestform";
import { getUserByClerkId } from "@/lib/actions/user.action";




export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
    title:"interest" };
  
export default async function Interest() {

    


    const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings


    const userInfo = await getUserByClerkId(User?.id);
      if (userInfo?.onboarded === true && userInfo?.interests?.length > 0) {
        redirect("/home")
      }
    
      return (
        <div className="flex flex-col justify-between w-[750px] p-7 h-[90%] rounded-sm shadow-md bg-[#f7f7f2]">
          <div className="flex flex-col gap-1 items-center">
            <h1 className="font-black text-black text-[18px]">Select at most 5 interests</h1>
            <p className="text-center text-[12.5px] text-black">
              Let's get to know your interests! Sharing your tastes with us will help us curate a personalized feed of posts and articles that resonate with you, right on your homepage.
            </p>
          </div>
          <InterestForm clerkId={User?.id} />
        </div>
      );
    }
    