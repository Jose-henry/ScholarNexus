import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:"Home" };

export default async function Home() {
 
  return (
    <></>
  );
}