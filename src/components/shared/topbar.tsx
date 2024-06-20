'use client'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import React, { useState } from "react";
import Link from 'next/link';
import { Avatar } from "@nextui-org/avatar";
import { Input } from "@nextui-org/input";
import { motion } from 'framer-motion';
import Pomodoro from '../cards/Pomodoro';
import SettingsCard from '../cards/settingsCard';
import { SignOutButton, SignedIn } from '@clerk/nextjs';

interface Props {
  imgUrl: string;
  id: string;
  level: string;
}

export default function TopBar({imgUrl, id, level}: Props) {
  const [isClick, setIsClick] = useState(false);
  const [showPomodoro, setShowPomodoro] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const toggleMenu = () => {
    setIsClick(!isClick);
  };

  const togglePomodoro = () => {
    setShowPomodoro(!showPomodoro);
    if (showSettings) {
      setShowSettings(false); // Close SettingsCard if open
    }
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    if (showPomodoro) {
      setShowPomodoro(false); // Close Pomodoro if open
    }
  };

    // Function to get border color based on level
    const getBorderColor = (level: string): string => {
      const levelColors: { [key: string]: string } = {
        "100": "#66ccff", // Level 100
        "200": "#99ff99", // Level 200
        "300": "#ffff99", // Level 300
        "400": "#ffcc99", // Level 400
        "500": "#cc99ff", // Level 500
        "600": "#ff9999", // Level 600
        "700": "#99ffff"  // Level 700
        // Add more levels as needed
      };
  
      return levelColors[level] || "#e0e0e0"; // Default color if level not found
    };
  

  return (
    <header className="p-[15px] pr-[25px] flex justify-between">
      <div className="flex w-full md:w-[400px] sm:w-[350px] h-[30px] gap-[3%] p-[1px] rounded-[3px] bg-white border border-[#d3d6db]">
        <Input
          isClearable
          radius="sm"
          size="md"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              "w-full",
              "h-full",
              "text-[13px]",
              "p-[2px]",
              "bg-white"
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-sm",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <Image width="18" height="18" className="mr-2" src="/assets/search-icon.svg" alt="search" />
          }
        />
      </div>

      <div className='relative flex gap-[15px] items-center'>
        <motion.div className={'absolute p-[7px] mt-[12px] top-full rounded-sm md:hidden z-10 right-0 w-40 bg-[#393e46] flex text-[#eef2e2] text-[12.5px] flex-col gap-2 shadow-md' + (isClick ? '' : ' hidden')} initial={{ opacity: 0 }} animate={{ opacity: isClick ? 1 : 0 }} transition={{ duration: 0.3 }}>
          <div className="flex items-center gap-2">
            <Image src="/assets/notification-icon.svg" alt="notification" width={18} height={18} />
            <span className='hover:underline cursor-pointer'>Notifications</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/assets/settings-icon.svg" alt="settings" width={18} height={18} />
            <span className='hover:underline cursor-pointer'>Settings</span>
          </div>
          <SignedIn>
            <SignOutButton>
              <div className="flex items-center gap-2">
                <Image src="/assets/logout-icon.svg" alt="logout" width={18} height={18} />
                <span className='hover:underline'>Logout</span>
              </div>
            </SignOutButton>
          </SignedIn>
        </motion.div>
        <div className="md:hidden flex">
          <button className={'inline-flex items-center justify-center p-2 rounded-md text-black md:text-black' + (isClick ? 'focus:ring-2 focus:ring-inset focus:ring-gray-600' : '')} aria-label="Menu" onClick={toggleMenu}>
            <Bars3CenterLeftIcon className="size-6 text-dark-1 " />
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <div className='relative group'>
            <Image
              src="/assets/time-icon.svg"
              alt="time"
              width={20}
              height={20}
              className="hidden md:block cursor-pointer"
              onClick={togglePomodoro}
            />
            {showPomodoro && <Pomodoro />}
            <p className="absolute text-[10px] text-black font-bold top-[-18px] left-[-56px] w-[65px] rounded-full text-center p-0.5 bg-[#dee1ec] opacity-0 group-hover:opacity-100">
              Pomodoro
            </p>
          </div>

          <div className='relative group'>
            <Link href="/notifications" aria-label="">
              <Image
                src="/assets/notification-icon.svg"
                alt="notification"
                width={20}
                height={20}
                className="hidden md:block cursor-pointer"
              />
            </Link>
            <p className="absolute text-[10px] text-black font-bold top-[-18px] left-[-56px] w-[80px] rounded-full text-center p-0.5 bg-[#dee1ec] opacity-0 group-hover:opacity-100">
              Notifications
            </p>
          </div>

          <div className='relative group'>
            <Image
              src="/assets/settings-icon.svg"
              alt="settings"
              width={20}
              height={20}
              className="hidden md:block cursor-pointer"
              onClick={toggleSettings}
            />
            {showSettings && <SettingsCard />}
            <p className="absolute text-[10px] text-black font-bold top-[-18px] left-[-56px] w-[60px] rounded-full text-center p-0.5 bg-[#dee1ec] opacity-0 group-hover:opacity-100">
              Settings
            </p>
          </div>
          
          <Link href={"/profile/" + id} aria-label="" className="relative group">
            <div
              className="w-[30px] h-[30px] rounded-full bg-cover bg-center shadow-sm relative overflow-hidden"
              style={{
                backgroundImage: `url(${imgUrl})`,
                border: `2px solid ${getBorderColor(level)}`, // Set border color dynamically based on level
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid #dc2f2f";
              }} // Show border on hover
              onMouseLeave={(e) => {
                e.currentTarget.style.border = `2px solid ${getBorderColor(level)}`; // Reset border color on hover out
              }}
            ></div>
            <p className="absolute text-[10px] text-black font-bold top-[-18px] left-[-30px] w-[50px] rounded-full text-center p-0.5 bg-[#dee1ec] opacity-0 group-hover:opacity-100">
              Profile
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
}
