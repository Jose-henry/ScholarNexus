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
        <header className="p-[15px] pr-[25px] flex justify-between">
        <div className="flex w-full md:w-[400px] sm:w-[350px] h-[30px] gap-[3%] p-[1px] rounded-[3px] border border-[#e0e0e0]">
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
            "text-[13px]",
            "p-[2px]",
            "bg-white"
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-md",
            "shadow-[#9ba6a5]",
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
            <Image width="18" height="18" className="mr-2" src="/assets/search-icon.svg" alt="search"/>
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
                      <Image src="/assets/logout.svg" alt="logout" width={18} height={18}/> 
                      <span className='hover:underline cursor-pointer'>Logout</span> 
                  </div> 
              </SignOutButton> 
          </SignedIn> 
      </motion.div> 
      <div className="md:hidden flex"> 
          <button className={'inline-flex items-center justify-center p-2 rounded-md text-black md:text-black' + (isClick ? 'focus:ring-2 focus:ring-inset focus:ring-green-500' : '')} aria-label="Menu" onClick={() => toggleMenubar()}> 
              <Bars3CenterLeftIcon className="size-6 text-dark-1 " /> 
          </button> 
      </div> 
      <div className="flex gap-4 items-center"> 
          <Image src="/assets/notification-icon.svg" alt="notification" width={20} height={20} className="hidden md:block cursor-pointer"> 
          </Image> 
          <Image src="/assets/settings-icon.svg" alt="settings" width={20} height={20} className="hidden md:block cursor-pointer"> 
          </Image> 
          <Avatar showFallback isBordered radius="full" src="(link unavailable)" size="sm" className='cursor-pointer bg-slate-300 h-[25px] w-[25px]'> 
          </Avatar> 
      </div> 
  </div>

      </header>
    )
}
  