import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { Metadata } from "next";
import { ComboboxDropdownMenu } from "@/components/forms/toDo";
import AnalyticsCard from "@/components/cards/analyticsCard";
import Image from "next/image";



export const metadata: Metadata = {
  title:"ToDo" };



export default async function Task() {
  const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings
    const userInfo = await getUserByClerkId(User?.id);
    if (userInfo?.onboarded === false) {
      redirect("/onboarding");}

  return (
    <div className="h-full flex flex-col gap-7 pr-5 pt-5">
      <AnalyticsCard/>
      <div className="flex flex-col gap-4">
        <button className="self-start size-sm border-0 shadow-md text-[12px] bg-[#142d4c] w-[80px] text-white font-bold p-1 rounded-full">Add Task</button>
        <div className="h-[390px] grid grid-cols-2 gap-4">
          <div className="flex flex-col h-full overflow-y-scroll p-0.5">
            <ComboboxDropdownMenu />
            <ComboboxDropdownMenu />
            <ComboboxDropdownMenu />
            <ComboboxDropdownMenu />
            <ComboboxDropdownMenu />
            <ComboboxDropdownMenu />
          </div>
          <div className="shadow-sm rounded-sm border border-[#dee1ec] p-2">
            <h2 className="text-[13px] font-semibold">Completed</h2>
          </div>
        </div>
      </div>
    </div>
  );
}