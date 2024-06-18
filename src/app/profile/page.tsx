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
      <div className="w-full h-full pr-5 grid grid-cols-2 pb-3 gap-2 pt-2">
        <div className="border border-black">
        </div>
        <div className="border border-black">

        </div>
      </div>
  );
}