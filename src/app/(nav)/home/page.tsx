// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { auth } from "@clerk/nextjs/server";
import DashboardCard from "@/components/cards/DashboardCard";
import ThreadCard from "@/components/cards/ThreadCard";
import VideoCard from "@/components/cards/VideoCard";
import { Button } from "@nextui-org/button";
import { Metadata } from "next";
// import ThreadCard from "@/components/cards/ThreadCard";
// import VideoCard from "@/components/cards/VideoCard";
// import DashboardCard from "@/components/cards/DashboardCard";


export const metadata: Metadata = {
  title:"Home" };

  export default async function Home() {
    return (
      <div className="w-[100%] grid h-full gap-[2%] pt-[15px] pb-[15px]" style={{ gridTemplateColumns: "2fr 1fr" }}>
        <div className="h-full flex flex-col gap-[30px]">
          <VideoCard/>
          <div className="flex gap-[10px] border-t-1.5 border-t-[#e0e0e0] pt-[8px]">
            <Button variant="shadow" size="sm" radius="full" className="w-[80px] font-bold">All</Button> 
            <Button variant="shadow" size="sm" radius="full" className="w-[80px] font-bold">Articles</Button> 
            <Button variant="shadow" size="sm" radius="full" className="w-[80px] font-bold">Videos</Button> 
          </div>
          <div className="grid gap-[30px] grid-cols-3 grid-rows-2 h-full">
            <ThreadCard imageUrl=""/>
            <ThreadCard imageUrl=""/>
            <ThreadCard imageUrl=""/>
            <ThreadCard imageUrl=""/>
            <ThreadCard imageUrl=""/>
            <ThreadCard imageUrl=""/>
          </div>
        </div>
        <div className="h-full pl-[10px] pr-[20px]">
          <DashboardCard/>
        </div>
      </div>
    );
  }
  