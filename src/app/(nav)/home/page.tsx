// import { currentUser } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { auth } from "@clerk/nextjs/server";
import DashboardCard from "@/components/cards/DashboardCard";
import ThreadCard from "@/components/cards/ThreadCard";
import ThreadCard1 from "@/components/cards/ThreadCard1";
import VideoCard from "@/components/cards/VideoCard";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@nextui-org/button";
import { Metadata } from "next";
import Image from "next/image"
import { redirect } from "next/navigation";
import getNews from "@/lib/actions/news.action";
import getYoutube from "@/lib/actions/youtube.action";
import { getBooks, getBookCovers } from "@/lib/actions/book.action"
import getQuotes from "@/lib/actions/quote.action";



// import ThreadCard from "@/components/cards/ThreadCard";
// import VideoCard from "@/components/cards/VideoCard";
// import DashboardCard from "@/components/cards/DashboardCard";


export const metadata: Metadata = {
  title:"Home" }

  export default async function Home() {    

    //TODO: get user info and add a check to see if user has onboarded and field in interests if not then redirect to interest & onboarding

    const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings
    const userInfo = await getUserByClerkId(User?.id);
    if (userInfo?.onboarded === false) {
        redirect("/onboarding");}


    //fetching news based on interest
    const news = await getNews(userInfo);
    //console.log(news)

    //fetching youtube based on interest
    const youtube = await getYoutube(userInfo);
    //console.log(youtube)

    //fetching books based on interest
    const books = await getBooks(userInfo);
    //console.log(books)
    const bookCovers = await getBookCovers(userInfo);

    //fetching quotes
    const quotes = await getQuotes();
    //console.log(quotes)

        
        
        
      


    return (
        <div className="w-[100%] grid h-full gap-[1%] pt-[15px] pb-[15px]" style={{ gridTemplateColumns: "2.3fr 1fr" }}>
            <div className="h-full flex flex-col gap-[30px]">
                <VideoCard />
                <div className="flex gap-[10px] border-t-[1px] border-t-[#63686e] pt-3">
                <Button 
                    variant="light" 
                    size="sm" 
                    radius="full" 
                    className="w-[80px] font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
                >
                    <Image width="12" height="12" src="/assets/all-icon.svg" alt="next"/>
                    All
                </Button>
                <Button 
                    variant="light" 
                    size="sm" 
                    radius="full" 
                    className="w-fit font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
                >
                    <Image width="12" height="12" src="/assets/articles-icon.svg" alt="next"/>
                    Articles
                </Button>
                <Button 
                    variant="light" 
                    size="sm" 
                    radius="full" 
                    className="w-fit font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
                >
                    <Image width="13" height="13" src="/assets/videos-icon.svg" alt="next"/>
                    Videos
                </Button>
                <Button 
                    variant="light" 
                    size="sm" 
                    radius="full" 
                    className="w-fit font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
                >
                    <Image width="12" height="12" src="/assets/course-icon.svg" alt="next"/>
                    Courses
                </Button>
                <Button 
                    variant="light" 
                    size="sm" 
                    radius="full" 
                    className="w-fit font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
                >
                    <Image width="12" height="12" src="/assets/white-bookmark.svg" alt="next"/>
                    Bookmarked
                </Button>
                </div>

                <div className="grid gap-[25px] grid-cols-3 h-[330px] overflow-y-scroll items-start p-[15px] scroll-smooth"> 
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
                        blurDataURL="blurDataURL"
                    />
                    <ThreadCard1 
                        imageUrl="/misc/pic3.jpg"
                        w={5000}
                        h={2000}
                        blurDataURL="/misc/pic3-blur.jpg"
                    />
                    <ThreadCard videoUrl="/misc/vid3.mp4" />
                    <ThreadCard1 
                        imageUrl="/misc/pic2.jpg"
                        w={5000}
                        h={2000}
                        blurDataURL="blurDataURL"
                    />
                    <ThreadCard1 
                        imageUrl="/misc/pic3.jpg"
                        w={5000}
                        h={2000}
                        blurDataURL="/misc/pic3-blur.jpg"
                    />
                </div>
            </div>
            <div className="h-full pl-[10px] pr-[20px]">
                <DashboardCard />
            </div>
        </div>
    );
}