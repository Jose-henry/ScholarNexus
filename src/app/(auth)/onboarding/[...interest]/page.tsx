

import { getUserByClerkId } from "@/lib/actions/user.action";
import { redirect} from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import  InterestForm  from "@/components/forms/InterestForm";



export default async function Interest() {

    


    const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings

    const userInfo = await getUserByClerkId(User?.id);
    if (userInfo?.onboarded&&userInfo?.interests.length > 0) redirect("/home");



    return (
        <div className="flex flex-col justify-between gap-[650px]">
            <h1 className="font-black text-slate-300">Select at most four interests</h1>
                <InterestForm />

        </div>
    )
}