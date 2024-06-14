import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { Metadata } from "next";
import { ComboboxDropdownMenu } from "@/components/forms/toDo";
import AnalyticsCard from "@/components/cards/analyticsCard";



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
      <div className="flex flex-col gap-2">
        <div className="w-[100%] h-[50px] shadow-sm rounded-sm border border-[#dee1ec]">

        </div>
        <div className="flex flex-col gap-2 h-[390px] overflow-y-scroll">
          <ComboboxDropdownMenu />
        </div>
      </div>
    </div>
  );
}