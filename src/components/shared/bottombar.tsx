"use client"

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function BottomBar(){
    const pathname = usePathname()
    return(
        <footer>
            <div className="text-black flex backdrop-blur-md bg-[#044a42] page sidebar-3 sidebar-3-page justify-between p-[8px] md:hidden ">
            {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                return (
                    <Link 
                    href={link.route}
                    key = {link.label}
                    className={`relative flex justify-start gap-2 rounded-sm p-[4px] ${isActive && 'bg-[#f0d78c]'} hover:bg-[#17132a] hover:rounded-sm hover:transition-all hover:pl-[4px] `}>
                        <Image src = {link.imgURL} alt = {link.label} width ={18} height = {18} />

                        {/* <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+./)[0]}</p>
 */}                    </Link>
                )}
                )}
            </div>
        </footer>
    )
}