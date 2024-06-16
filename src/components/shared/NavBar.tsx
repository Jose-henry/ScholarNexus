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
        <nav   className="flex flex-col justify-between items-center page sidebar-3 sidebar-3-page max-md:hidden w-[52px] h-[100%] pt-[20px] pb-[10px] bg-white shadow-md shadow-[#eeeeee]">
            <div className="flex flex-col gap-[30px]">
                <Link href={'/'} aria-label="logo" className="flex items-center gap-[10px]">
                    <Image width="32" height="32" src="/assets/education-icon.svg" alt="logo"/>
                </Link>
            <div className=" gap-[30px] flex flex-col items-center justify-center">
            {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

                    if (link.route ==='/profile') link.route = `${link.route}/${userId}`
                return (   

                        <Link 
                        href={link.route}
                        key = {link.label}
                        className={`relative flex justify-start gap-2 rounded-sm ${
                            isActive && 'bg-[#9ba6a5] rounded-sm p-[4px]'
                        } hover:bg-[#17132a] hover:rounded-sm hover:transition-all hover:p-[4px]`}
                        >
                            <Image src = {link.imgURL} alt = {link.label} width ={20} height = {20} />

                            {/* <p className="text-light-1 max-lg:hidden">{link.label}</p> */}
                        </Link>
                )}
                )}
                </div>
            </div>
            <div>
            <SignedIn>
                        <SignOutButton redirectUrl="/sign-in">
                            <div className="flex cursor-pointer gap-4 p-[4px] hover:bg-[#17132a] hover:rounded-sm hover:transition-all">
                                <Image src='/assets/logout.svg' alt="logout" width ={20} height ={20} />
                                {/* <p className="text-light-2 max-lg:hidden">Logout</p> */}
                            </div>
                        </SignOutButton>
                    </SignedIn>
            </div>
        </nav>
    )
}