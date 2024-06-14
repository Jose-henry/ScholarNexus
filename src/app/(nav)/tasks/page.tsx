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
    <div className="h-full flex flex-col gap-4 pr-5 pt-5">
      <AnalyticsCard/>
      <div className="flex flex-col gap-4 border-t-[1px] border-t-black">
        <Image width="30" height="30" src="/assets/add-task-icon.svg" alt="health" className="ml-3" />
        <div className="h-[390px] grid grid-cols-2 gap-4">
          <div className="flex flex-col h-full overflow-y-scroll p-0.5 justify-between">
            <ComboboxDropdownMenu />
            <ComboboxDropdownMenu />
            <ComboboxDropdownMenu />
            <ComboboxDropdownMenu />
            <ComboboxDropdownMenu />
            <ComboboxDropdownMenu />
          </div>
          <div className="shadow-sm rounded-sm border border-[#dee1ec]">

          </div>
        </div>
      </div>
    </div>
  );
}