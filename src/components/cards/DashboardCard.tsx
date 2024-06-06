import DashboardFriends from "./DashboardFriends";
import DashboardTask from "./DashboardTask";
import UserWelcomeCard from "./UserWelcomeCard";


export default function DashboardCard() {
    return (
        <div className="bg-gray-100 w-[100%] h-[100%] rounded-[3px] p-[25px]">
            <h2 className="font-bold text-black">Dashboard</h2>
            <div className="h-[97%] flex flex-col justify-between w-[100%] pt-[10px] pb-[10px]">
                <UserWelcomeCard />
                <DashboardTask />
                <DashboardFriends />
            </div>
        </div>
    );
}