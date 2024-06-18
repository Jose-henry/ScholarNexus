import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getNews } from "@/lib/actions/news.action";
import NewsSection from "@/components/misc/NewsSection";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Home"
};

async function HomePage() {
  const User = await currentUser();
  if (!User) return null;
  const userInfo = await getUserByClerkId(User?.id);
  if (userInfo?.onboarded === false) {
    redirect("/onboarding");
  }

  const news = await getNews(userInfo, false);

  return (
    <div className="w-[100%] grid h-full gap-[1%] pt-[15px] pb-[15px]" style={{ gridTemplateColumns: "2.3fr 1fr" }}>
      <NewsSection initialNews={news} userInfo={userInfo} />
    </div>
  );
}

export default HomePage;
