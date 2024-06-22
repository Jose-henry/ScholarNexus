import Image from "next/image";
import DashboardFriends from "./DashboardFriends";
import DashboardTask from "./DashboardTask";
import UserWelcomeCard from "./UserWelcomeCard";
import { Suspense } from "react";

interface Props {
  imgUrl: string;
  firstName: string;
  level: string;
}

export default function DashboardCard({ imgUrl, firstName, level }: Props) {
  return (
    <div className="w-[100%] h-[100%] shadow-lg rounded-sm p-[20px] relative bg-[#132743]">
      <div className="flex gap-2">
        <Image width="25" height="25" src="/assets/dashboard-icon.svg" alt="next" />
        <h2 className="font-bold text-[#eef2e2] text-[14px]">Dashboard</h2>
      </div>
      <div className="h-[97%] flex flex-col justify-between w-[100%] pt-[10px] pb-[10px]">
        <Suspense fallback={<div>Loading...</div>}>
          <UserWelcomeCard
            imgUrl={imgUrl}
            firstName={firstName}
            level={level} // Pass level prop to UserWelcomeCard
          />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardTask />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardFriends />
        </Suspense>
      </div>
    </div>
  );
}
