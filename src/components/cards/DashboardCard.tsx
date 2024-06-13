import Image from "next/image";
import DashboardFriends from "./DashboardFriends";
import DashboardTask from "./DashboardTask";
import UserWelcomeCard from "./UserWelcomeCard";


export default function DashboardCard() {
    return (
        <div 
        className="w-[100%] h-[100%] shadow-lg rounded-sm p-[20px] relative"
        style={{ 
            backgroundImage: 'linear-gradient(110.3deg, rgba(73,93,109,1) 4.3%, rgba(49,55,82,1) 96.7%)'
        }}
        >
        <div className="flex gap-2">
            <Image width="25" height="25" src="/assets/dashboard-icon.svg" alt="next"/>
            <h2 className="font-bold text-[#eef2e2] text-[14px]">Dashboard</h2>
        </div>
        <div className="h-[97%] flex flex-col justify-between w-[100%] pt-[10px] pb-[10px]">
            <UserWelcomeCard />
            <DashboardTask />
            <DashboardFriends />
        </div>
        </div>

    );
}