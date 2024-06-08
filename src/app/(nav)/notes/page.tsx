// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
import VideoCard from "@/components/cards/VideoCard1";
import { Metadata } from "next";




export const metadata: Metadata = {
  title:"Notes" };

export default function Notes() {
  
  return (
    <>
    <VideoCard />
    </>
  );
}