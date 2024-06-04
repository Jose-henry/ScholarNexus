import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:"ToDo" };



export default function Task() {
  const User = currentUser();
  if (!User) redirect("/");
  return (
    <></>
  );
}