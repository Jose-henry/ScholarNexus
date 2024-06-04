import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function Profile() {
  const { userId } = auth();
  console.log('userId', userId)
  const User = await currentUser();

  console.log('User', User)

  if (!User) redirect("/");
  return (
    <></>
  );
}