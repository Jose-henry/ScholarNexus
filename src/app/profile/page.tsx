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
    const userName  = userInfo?.username||""
    const firstName = userInfo?.firstName||""
    const middleName = userInfo?.middleName||""
    const lastName = userInfo?.lastName||""
    const email = userInfo?.email||""
    const image = userInfo?.image||""
    const bio = userInfo?.bio||""
    const programme = userInfo?.programme||""
    const school = userInfo?.school||""
    const level = userInfo?.level||""

  return (
      <div className="w-full h-full pr-5 grid grid-cols-2 pb-3 gap-5 pt-2">
        <div className="grid grid-rows-3 gap-3 py-2">
          <NameCard userName={userName} firstName={firstName} middleName={middleName} lastName={lastName} image={image} email={email} />
          <EducationCard programme={programme} school={school} level={level}/>
          <BioCard bio={bio}/>
        </div>
        <div className="grid grid-rows-2 gap-3">
          <UserNotesCard firstName={firstName}/>
          <JobCard firstName={firstName}/>
        </div>
      </div>
  );
}