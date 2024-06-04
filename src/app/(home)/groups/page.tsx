import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";



export const metadata: Metadata = {
  title:"Groups" };



export default function Groups() {
  const User = currentUser();
  if (!User) redirect("/");
  return (
    <></>
  );
}