import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { getUserByClerkId } from "@/lib/actions/user.action";
import { Metadata } from "next";
import { getFolders } from "@/lib/actions/folder.action";
import FoldersComponent from "@/components/misc/folders";

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

  const folders = await getFolders(userInfo?.id as string);

  return (
    <>
      <FoldersComponent folders={folders} />
    </>
  );
}