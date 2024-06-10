
import React from "react";

import { redirect} from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { Metadata } from "next";
import InterestForm from "@/components/forms/interestform";
import { getUserByClerkId } from "@/lib/actions/user.action";





export const metadata: Metadata = {
    title:"interest" };
  
export default async function Interest() {

    


    const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings

    const userInfo = await getUserByClerkId(User?.id);
    if (userInfo?.onboarded && (userInfo?.interests === undefined || userInfo?.interests.length === 0 || userInfo?.interests === null)) {
        redirect("/onboarding/interest");
      } else if (userInfo?.onboarded && userInfo?.interests?.length > 0) {
        redirect("/home");
      }
    


    return (
        <div className="flex flex-col justify-between gap-[650px]">
            <h1 className="font-black text-slate-300">Select at most four interests</h1>
                <InterestForm />

        </div>
    )
}