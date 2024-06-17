import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import VideoCard from "@/components/cards/VideoCard1";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes",
};

export default async function Notes() {
  const User = await currentUser();
  if (!User) return null; // to avoid typescript warnings
  const userInfo = await getUserByClerkId(User?.id);
  if (userInfo?.onboarded === false) {
    redirect("/onboarding");
  }

  return (
    <div className="flex flex-col h-full pr-5 gap-6">
      <div
        className="h-[200px] rounded-sm overflow-hidden"
        style={{
          backgroundImage: "url('/assets/notes-bg.jpg')",
          backgroundSize: "cover", // Adjusts the background image size
          backgroundPosition: "center", // Centers the background image
        }}
      >
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <button className="text-[12px] font-bold bg-[#132743] text-white px-2 py-1 shadow-md rounded-full flex items-center gap-1">
            <Image src="/assets/plus.svg" alt="folder" width={18} height={18} />
            Create folder
          </button>
          <button className="text-[13px] underline font-semibold">Personal</button>
          <button className="text-[13px] underline font-semibold">School</button>
          <button className="text-[13px] underline font-semibold">Work</button>
        </div>
        <div className="border-t-[1px] border-t-black pt-2">
          <div className="w-fit">
            <Image src="/assets/folder-icon.svg" alt="folder" width={60} height={60} />
            <h2 className="text-[11px] font-semibold text-center">Default folder</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
