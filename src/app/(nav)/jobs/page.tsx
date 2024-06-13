import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";



export const metadata: Metadata = {
  title:"Jobs" };

export default async function Jobs() {
  const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings
    const userInfo = await getUserByClerkId(User?.id);
    if (userInfo?.onboarded === false) {
      redirect("/onboarding");}
  return (
    <></>
  );
}