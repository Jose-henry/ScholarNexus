import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function Profile() {
  
  const User = await currentUser();

  if (!User) redirect("/");
    if (!User) return null; // to avoid typescript warnings
    const userInfo = await getUserByClerkId(User?.id);
    if (userInfo?.onboarded === false || (userInfo?.interests === undefined || userInfo?.interests.length === 0 || userInfo?.interests === null)) {
        redirect("/onboarding");
    }
  return (
    <>
    Profile </>
  );
}