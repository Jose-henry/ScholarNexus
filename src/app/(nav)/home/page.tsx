// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { auth } from "@clerk/nextjs/server";
import ThreadCard from "@/components/cards/ThreadCard";
import VideoCard from "@/components/cards/VideoCard";
import { Metadata } from "next";
// import ThreadCard from "@/components/cards/ThreadCard";
// import VideoCard from "@/components/cards/VideoCard";
// import DashboardCard from "@/components/cards/DashboardCard";


export const metadata: Metadata = {
  title:"Home" };

  export default async function Home() {
    return (
      <div className="w-[100%] grid h-full gap-[2%]" style={{ gridTemplateColumns: "2fr 1fr" }}>
        <div className="border border-grey h-full flex flex-col gap-[30px]">
          <VideoCard/>
          <div className="grid gap-[10px] grid-cols-3 grid-rows-2">
            <ThreadCard/>
            <ThreadCard />
            <ThreadCard />
          </div>
        </div>
        <div className="border border-grey h-full">
        </div>
      </div>
    );
  }
  