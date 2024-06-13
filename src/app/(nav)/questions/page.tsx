import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import BentoGridDemo from "@/components/cards/testcard";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { Metadata } from "next";





export const metadata: Metadata = {
  title:"Questions" };

export default async function Questions() {
  const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings
    const userInfo = await getUserByClerkId(User?.id);
    if (userInfo?.onboarded === false || (userInfo?.interests === undefined || userInfo?.interests.length === 0 || userInfo?.interests === null)) {
        redirect("/onboarding");
    }
  return (
    <>
      <BentoGridDemo/> 
    </>
  );
}