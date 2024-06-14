import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { Metadata } from "next";
import { ComboboxDropdownMenu } from "@/components/forms/toDo";



export const metadata: Metadata = {
  title:"ToDo" };



export default async function Task() {
  const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings
    const userInfo = await getUserByClerkId(User?.id);
    if (userInfo?.onboarded === false) {
      redirect("/onboarding");}

  return (
    <>
      <ComboboxDropdownMenu />
    </>
  );
}