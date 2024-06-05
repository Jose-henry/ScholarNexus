"use client"
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid'
import { SignOutButton, SignedIn } from "@clerk/nextjs"
import Image from "next/image"
import { motion } from 'framer-motion'
import {Avatar} from 
"@nextui-org/avatar";

import {Input} from "@nextui-org/input";
import React, { useState } from "react";

export default function TopBar(){

    const [isClick, setisClick] = useState(false)
    const toggleMenubar = () => {
    setisClick(!isClick)
    }
    return(
        <header className="p-[10px] flex justify-between">
        <div className="flex  bg-slate-100 border-[1px] w-full md:w-[400px] xs:w-[350px] gap-[3%] p-[0.5px] rounded-lg">
      <Input
        isClearable
        radius="sm"
        size="md"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60", "w-full", 
            "h-full", 
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
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
            <Image width="22" height="22" src="/assets/search-gray.svg" alt="search"/>
        }
      />
    </div>

            <div className='relative flex gap-[15px] items-center'>
            
                <motion.div 
                className={`absolute p-[5px] mt-[12px] top-full rounded-[4px] border-3 right-0 w-40 bg-gradient-to-r from-Navbar-primary to-Navbar-secondary flex text-white flex-col gap-2 shadow-sm ${isClick ? '' : 'hidden'} md:hidden`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isClick ? 1 : 0 }}
                transition={{ duration: 0.5 }}>
                <div className="flex items-center gap-2">
                  <Image src="/assets/bell-ringggg.svg" alt="notification" width={23} height={23} />
                  <span>Notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/settingssss.svg" alt="settings" width={23} height={23} />
                  <span>Settings</span>
                </div>

                <SignedIn>
                <SignOutButton>
                <div className="flex items-center gap-2">
                  <Image src="/assets/logout.svg" alt="logout" width={23} height={23}/>
                  <span>Logout</span>
                </div>
                </SignOutButton>
                </SignedIn>
                </motion.div>

                <div className="md:hidden flex">
                <button className={`inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white ${isClick ? 'focus:ring-2 focus:ring-inset focus:ring-green-500' : ''}`}
                aria-label="Menu"
                onClick={() => toggleMenubar()}>
                <Bars3CenterLeftIcon className="size-6 text-dark-1 " />
                </button>
                </div>
                <div className="flex gap-4 items-center">
                <Image src="/assets/bell-ringblack.svg" alt="notification" width={23} height={23} className="hidden md:block">
                </Image>
                <Image src="/assets/settingsblack.svg" alt="settings" width={23} height={23} className="hidden md:block">
                </Image>
                <Avatar showFallback  isBordered radius="full"   color="success" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md">
                </Avatar>
                <span className='text-black lg:block hidden'>Fortune</span>
                </div>
            </div>
        </header>
    )
}
