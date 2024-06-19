import BioCard from "@/components/cards/BioCard";
import EducationCard from "@/components/cards/EducationCard";
import JobCard from "@/components/cards/JobCard";
import NameCard from "@/components/cards/NameCard";
import UserNotesCard from "@/components/cards/UserNotesCard";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"


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
        <div className="grid grid-rows-3 gap-3 py-2">
          <NameCard userName="foguibe" firstName="Fortune" middleName="Oluomachukwu" lastName="Oguibe" image="/assets/profile-pic.jpg" email="foguibe@gmail.com" />
          <EducationCard programme="Computer Science" school="Covenant University" level="400"/>
          <BioCard bio="Reading is my refuge and inspiration. From classic literature to contemporary fiction, I immerse myself in diverse genres and perspectives. Books aren't just stories for me; they're gateways to understanding the world, sparking my imagination and broadening my horizons. I love engaging with fellow enthusiasts and learners. Feel free to reach out to me!"/>
        </div>
        <div className="grid grid-rows-2 gap-3">
          <UserNotesCard firstName="Fortune"/>
          <JobCard firstName="Fortune"/>
        </div>
      </div>
  );
}