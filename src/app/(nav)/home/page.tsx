import { Button } from "@nextui-org/button";
import Image from "next/image";
import DashboardCard from "@/components/cards/DashboardCard";
import ThreadCard from "@/components/cards/ThreadCard";
import ThreadCard1 from "@/components/cards/ThreadCard1";
import VideoCard from "@/components/cards/VideoCard";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home"
};

export default async function Home() {
  // Get current user information
  const user = await currentUser();
  if (!user) return null; // Return null to avoid TypeScript warnings
  const userInfo = await getUserByClerkId(user?.id);

  // Check if user has completed onboarding or set interests
  // Redirect to onboarding page if necessary
  // Example condition (commented out for clarity):
  // if (!userInfo?.onboarded || !userInfo?.interests || userInfo?.interests.length === 0) {
  //   redirect("/onboarding");
  // }

  return (
    <div className="w-full grid h-full gap-1 pt-15 pb-15" style={{ gridTemplateColumns: "2.3fr 1fr" }}>
      {/* Left column */}
      <div className="flex flex-col gap-30">
        <VideoCard />
        {/* Buttons section */}
        <div className="flex gap-10 border-t-1 border-gray-600 pt-3">
          <GradientButton icon="/assets/all-icon.svg" label="All" />
          <GradientButton icon="/assets/articles-icon.svg" label="Articles" />
          <GradientButton icon="/assets/videos-icon.svg" label="Videos" />
          <GradientButton icon="/assets/course-icon.svg" label="Courses" />
          <GradientButton icon="/assets/filled-bookmark-icon.svg" label="Bookmarked" />
        </div>
        {/* Threads section */}
        <div className="grid gap-25 grid-cols-3 h-330 overflow-y-scroll items-start p-15 scroll-smooth">
          <ThreadCard videoUrl="/misc/vid1.mp4" />
          <ThreadCard videoUrl="/misc/vid2.mp4" />
          <ThreadCard1
            imageUrl="/misc/pic1.jpg"
            w={5000}
            h={2000}
            blurDataURL="/misc/pic1-blur.jpg"
          />
          <ThreadCard videoUrl="/misc/vid3.mp4" />
          <ThreadCard1
            imageUrl="/misc/pic2.jpg"
            w={5000}
            h={2000}
            blurDataURL="/misc/pic2-blur.jpg"
          />
          <ThreadCard1
            imageUrl="/misc/pic3.jpg"
            w={5000}
            h={2000}
            blurDataURL="/misc/pic3-blur.jpg"
          />
          <ThreadCard videoUrl="/misc/vid4.mp4" />
          <ThreadCard1
            imageUrl="/misc/pic2.jpg"
            w={5000}
            h={2000}
            blurDataURL="/misc/pic2-blur.jpg"
          />
          <ThreadCard1
            imageUrl="/misc/pic3.jpg"
            w={5000}
            h={2000}
            blurDataURL="/misc/pic3-blur.jpg"
          />
        </div>
      </div>
      {/* Right column */}
      <div className="pl-10 pr-20">
        <DashboardCard />
      </div>
    </div>
  );
}

// GradientButton component to apply radial gradient background
const GradientButton = ({ icon, label }: { icon: string; label: string }) => (
  <Button
    variant="light"
    size="sm"
    radius="full"
    className="w-90 font-bold text-white text-12 shadow-lg flex items-center justify-center gap-1"
    style={{
      backgroundImage: 'radial-gradient(circle 590px at 8.2% 13.8%, rgba(18,35,60,1) 0%, #bbb 90%)'
    }}
  >
    <Image src={icon} alt="next" width={16} height={16} />
    {label}
  </Button>
);
