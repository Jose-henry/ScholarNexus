import UserWelcomeCard from "./UserWelcomeCard";


export default function DashboardCard() {
    return (
        <div className="bg-gray-100 w-[100%] h-[100%] rounded-[3px] p-[10px]">
            <h2 className="font-bold">Dashboard</h2>
            <div className="h-[97%] w-[100%] border border-black">
                <UserWelcomeCard/>
            </div>
        </div>
    );
}