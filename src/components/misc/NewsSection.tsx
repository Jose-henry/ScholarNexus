'use client';
import { useState } from 'react';
import { Button } from "@nextui-org/button";
import ThreadCard1 from "@/components/cards/ThreadArticleCard";
import { getNews } from "@/lib/actions/news.action";
import { customLoader } from "@/utils/imageCustom";
import Image from "next/image";
import VideoCard from '../cards/VideoCard';
import DashboardCard from '../cards/DashboardCard';
import { Suspense } from 'react'

function NewsSection({ initialNews, userInfo }: any) {
  const [news, setNews] = useState(initialNews);

  const handleRefresh = async () => {
    const refreshedNews = await getNews(userInfo, true);
    setNews(refreshedNews);
  };

  return (
    <>
      <div className="h-full flex flex-col gap-[30px]">
        <VideoCard />
        <div className="flex gap-[10px] border-t-[1px] border-t-[#63686e] pt-3">
          <Button
            variant="light"
            size="sm"
            radius="full"
            className="w-[80px] font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
          >
            <Image width="12" height="12" src="/assets/articles-icon.svg" alt="articles" />
            Articles
          </Button>
          <Button
            variant="light"
            size="sm"
            radius="full"
            className="w-fit font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
          >
            <Image width="12" height="12" src="/assets/book-icon.svg" alt="books" />
            Books
          </Button>
          <Button
            variant="light"
            size="sm"
            radius="full"
            className="w-fit font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
          >
            <Image width="13" height="13" src="/assets/videos-icon.svg" alt="videos" />
            Videos
          </Button>
          <Button
            variant="light"
            size="sm"
            radius="full"
            className="w-fit font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
          >
            <Image width="12" height="12" src="/assets/course-icon.svg" alt="courses" />
            Courses
          </Button>
          <Button
            variant="light"
            size="sm"
            radius="full"
            className="w-fit font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
          >
            <Image width="12" height="12" src="/assets/white-bookmark.svg" alt="bookmarked" />
            Bookmarked
          </Button>
          <Button
            variant="light"
            size="sm"
            radius="full"
            className="w-fit font-bold text-white text-[12px] shadow-lg flex items-center justify-center gap-1 bg-[#142d4c]"
            onClick={handleRefresh}
          >
            <Image width="14" height="14" src="/assets/refresh.svg" alt="refresh" />
            Refresh
          </Button>
        </div>
        <div className="grid gap-[25px] grid-cols-3 h-[330px] overflow-y-scroll items-start p-[15px] scroll-smooth">
          {news.map((item: any, index: number) => (
            <Suspense fallback={<div>Loading feed...</div>}>
            <ThreadCard1
              key={index}
              imageUrl={item.urlToImage ? item.urlToImage : "/pic1.jpg"}
              link={item.url}
              title={item.title}
              description={item.description}
              loader={customLoader}
            />
            </Suspense>
          ))}
        </div>
      </div>
      <div className="h-full pl-[10px] pr-[20px]">
        <DashboardCard />
      </div>
    </>
  );
}

export default NewsSection;
