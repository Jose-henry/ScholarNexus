// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { auth } from "@clerk/nextjs/server";
import VideoCard from "@/components/cards/VideoCard";
import { Metadata } from "next";
// import ThreadCard from "@/components/cards/ThreadCard";
// import VideoCard from "@/components/cards/VideoCard";
// import DashboardCard from "@/components/cards/DashboardCard";


export const metadata: Metadata = {
  title:"Home" };

  export default async function Home() {
    return (
      <div className="w-[100%] grid grid-cols-2 h-full gap-[2%]" style={{ gridTemplateColumns: "2fr 1fr" }}>
        <div className="border border-grey h-full">
          <VideoCard/>
        </div>
        <div className="border border-grey h-full">

        </div>
      </div>
    );
  }
  