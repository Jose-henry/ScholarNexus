"use client"

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function BottomBar(){
    const pathname = usePathname()
    return(
        <footer>
            <div className=" p- text-black flex backdrop-opacity-10 backdrop-blur-md page sidebar-3 sidebar-3-page    justify-between p-[15px] md:hidden ">
            {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                return (
                    <Link 
                    href={link.route}
                    key = {link.label}
                    className={`relative flex justify-start gap-2 rounded-lg p-2 pl-[9px] ${isActive && 'bg-[grey]'}`}>
                        <Image src = {link.imgURL} alt = {link.label} width ={24} height = {24} />

                        {/* <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+./)[0]}</p>
 */}                    </Link>
                )}
                )}
            </div>
        </footer>
    )
}