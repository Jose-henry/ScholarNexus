import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function Profile() {
  
  const User = await currentUser();

  if (!User) redirect("/");
  return (
    <>
    Profile </>
  );
}