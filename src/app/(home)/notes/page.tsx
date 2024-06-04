import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";




export const metadata: Metadata = {
  title:"Notes" };

export default function Notes() {
  const User = currentUser();
  if (!User) redirect("/");
  return (
    <></>
  );
}