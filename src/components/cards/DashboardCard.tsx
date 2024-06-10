import DashboardFriends from "./DashboardFriends";
import DashboardTask from "./DashboardTask";
import UserWelcomeCard from "./UserWelcomeCard";


export default function DashboardCard() {
    return (
        
        <div className="bg-[#044a42] w-[100%] h-[100%] shadow-lg rounded-sm p-[20px] relative">
            <div className="flex gap-2">
                <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/f0d78c/dashboard-layout.png" alt="dashboard-layout"/>
                <h2 className="font-bold text-[#eef2e2] text-[14px]">Dashboard</h2>
            </div>
            <div className="h-[97%] flex flex-col gap-7 w-[100%] pt-[10px] pb-[10px]">
                <UserWelcomeCard />
                <DashboardTask />
                <DashboardFriends />
            </div>
        </div>
    );
}