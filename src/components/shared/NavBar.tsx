"use client"

import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { sidebarLinks } from "@/constants"



export default function NavBar(){
    const router = useRouter()
    const pathname = usePathname()
    const { userId } = useAuth()
    return(
        <nav className="flex flex-col justify-between items-center background-image  max-md:hidden w-[100px] h-[100%] pt-[10px] pb-[10px]">
            <div className="flex flex-col gap-[30px]">
                <Link href={'/'} aria-label="logo" className="flex items-center gap-[10px]">
                    {/* <Image src="/assets/logo28.svg" alt="" width={50} height={50} className="ml-[-5px]">
                    </Image> */}
                </Link>
            <div className=" gap-[30px] flex flex-col items-start justify-start">
            {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

                    if (link.route ==='/profile') link.route = `${link.route}/${userId}`
                return (    
                    <Link 
                    href={link.route}
                    key = {link.label}
                    className={` relative flex justify-start gap-2 rounded-lg p-2 pl-[9px]
                    ${isActive && 'bg-green-500 rounded-[8px] pt-[10px] pb-[10px] pr-[10px]'}`}>
                        <Image src = {link.imgURL} alt = {link.label} width ={24} height = {24} />

                        {/* <p className="text-light-1 max-lg:hidden">{link.label}</p> */}
                    </Link>
                )}
                )}
                </div>
            </div>
            <div>
            <SignedIn>
                        <SignOutButton redirectUrl="/sign-in">
                            <div className="flex cursor-pointer gap-4 p-4">
                                <Image src='/assets/logout.svg' alt="logout" width ={24} height ={24} />
                                {/* <p className="text-light-2 max-lg:hidden">Logout</p> */}
                            </div>
                        </SignOutButton>
                    </SignedIn>
            </div>
        </nav>
    )
}