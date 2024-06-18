"use server"

import Image from "next/image";
import { ThemeSwitcher } from "../nextui/ThemeSwitcher";

export default function NotificationCard() {
    return (
        <div className="w-[200px] h-[200px] rounded-sm shadow-md bg-gray-800">
            <ThemeSwitcher/>
        </div>
    );
}