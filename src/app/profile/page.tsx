import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function Profile() {
  
  const User = await currentUser();

  if (!User) redirect("/");
  return (
    <></>
  );
}