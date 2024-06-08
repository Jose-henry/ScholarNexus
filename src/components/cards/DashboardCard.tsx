import DashboardFriends from "./DashboardFriends";
import DashboardTask from "./DashboardTask";
import UserWelcomeCard from "./UserWelcomeCard";


export default function DashboardCard() {
    return (
        
        <div className="bg-[#17132a]  shadow-md shadow-slate-600 transform opacity-80 bg-(url('/noise.webp')) w-[100%] h-[100%] rounded-[10px] p-[25px]">
            <h2 className="font-black text-slate-300">Dashboard</h2>
            <div className="h-[97%] flex flex-col justify-between w-[100%] pt-[10px] pb-[10px]">
                <UserWelcomeCard />
                <DashboardTask />
                <DashboardFriends />
            </div>
        </div>
    );
}