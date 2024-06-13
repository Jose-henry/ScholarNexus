"use client"

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function BottomBar(){
    const pathname = usePathname()
    return(
        <footer>
            <div 
            className="text-black flex backdrop-blur-md page sidebar-3 sidebar-3-page justify-between p-[8px] md:hidden"
            style={{ 
                backgroundImage: 'linear-gradient(110.3deg, rgba(73,93,109,1) 4.3%, rgba(49,55,82,1) 96.7%)'
            }}
            >
            {sidebarLinks.map((link) => {
                const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                return (
                <Link 
                    href={link.route}
                    key={link.label}
                    className={`relative flex justify-start gap-2 rounded-sm p-[4px] ${isActive && 'bg-[#9ba6a5]'} hover:bg-[#17132a] hover:rounded-sm hover:transition-all hover:p-[4px]`}
                >
                    <Image src={link.imgURL} alt={link.label} width={18} height={18} />
                    {/* <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+./)[0]}</p> */}
                </Link>
                );
            })}
            </div>
        </footer>
    )
}