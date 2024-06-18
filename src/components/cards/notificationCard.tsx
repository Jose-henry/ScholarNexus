"use client"

import Image from "next/image";
import { ThemeSwitcher } from "../nextui/ThemeSwitcher";

export default function NotificationCard() {
    return (
        <div className="w-[200px] h-[150px] rounded-sm shadow-md bg-gray-800 fixed right-2 top-2 z-10">
            <ThemeSwitcher/>
        </div>
    );
}