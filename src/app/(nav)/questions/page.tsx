// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
import BentoGridDemo from "@/components/cards/testcard";
import { Metadata } from "next";





export const metadata: Metadata = {
  title:"Questions" };

export default function Questions() {
  
  return (
    <>
      <BentoGridDemo/> 
    </>
  );
}