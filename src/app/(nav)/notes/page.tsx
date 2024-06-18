import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NotesComponent from '@/components/misc/notes'

import { getUserByClerkId } from "@/lib/actions/user.action";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes",
};

export default async function Notes() {
  const User = await currentUser();
  if (!User) return null; // to avoid typescript warnings
  const userInfo = await getUserByClerkId(User?.id);
  if (userInfo?.onboarded === false) {
    redirect("/onboarding");
  }

  return (
    <>
    <NotesComponent/>
    
    </>
  );
}