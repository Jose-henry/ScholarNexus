import NameCard from "@/components/cards/NameCard";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function Profile() {
  
  const User = await currentUser();

  if (!User) redirect("/");
    if (!User) return null; // to avoid typescript warnings
    const userInfo = await getUserByClerkId(User?.id);
    if (userInfo?.onboarded === false) {
        redirect("/onboarding");
    }
  return (
      <div className="w-full h-full pr-5 grid grid-cols-2 pb-3 gap-5 pt-2">
        <div className="grid grid-rows-3 gap-3">
          <NameCard userName="foguibe" firstName="Fortune" middleName="Oluomachukwu" lastName="Oguibe" image="/assets/profile-pic.svg"/>
          <div className="rounded-sm bg-white shadow-md"></div>
          <div className="rounded-sm bg-white shadow-md"></div>
        </div>
        <div className="grid grid-rows-2 gap-3">
          <div className="rounded-sm bg-white shadow-md"></div>
          <div className="rounded-sm bg-white shadow-md"></div>
        </div>
      </div>
  );
}