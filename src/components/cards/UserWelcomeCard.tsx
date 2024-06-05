import { Avatar } from "@nextui-org/avatar";


export default function UserWelcomeCard() {
    return (
        <div className="flex">
            <Avatar isBordered showFallback color="secondary" className="w-20 h-20 text-large" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <h3 className="text-black">Goodmorning Ella</h3>
            <p className="text-black">Keep the learning going!</p>
        </div>
    );
}