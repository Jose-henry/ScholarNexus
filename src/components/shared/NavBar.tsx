"use client"
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { sidebarLinks } from "@/constants";

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <nav className="flex flex-col justify-between items-center page sidebar-3 sidebar-3-page max-md:hidden w-[80px] h-[100%] pt-[20px] pb-[10px] shadow-md bg-white border-r-[1px] border-r-[#d3d6db]">
      <div className="flex flex-col gap-[30px]">
        <Link href={'/'} aria-label="logo" className="flex items-center gap-[10px]">
          <Image width="32" height="32" src="/assets/logo-icon.svg" alt="logo" />
        </Link>
        <div className="gap-[30px] flex flex-col items-center justify-center">
          {sidebarLinks.map((link) => {
            const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
            if (link.route === '/profile') link.route = `${link.route}/${userId}`;
            return (
              <Link
                href={link.route}
                key={link.label}
                className={`relative flex justify-start gap-2 rounded-sm group ${isActive ? 'bg-[#dee1ec] rounded-sm p-[4px] hover:bg-white hover:transition-all hover:p-[6px]' : ''} hover:transition-all hover:p-[4px]`}
              >
                <Image src={link.imgURL} alt={link.label} width={20} height={20} />
                <p className="absolute text-[11px] font-bold top-[-14px] left-3 w-[65px] rounded-full text-center p-0.5 bg-[#eeeeee] z-10 hidden group-hover:block">
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center flex-col">
        <Image src="/assets/nav-bar-img.svg" alt="icon" height={100} width={100}></Image>
        <SignedIn>
          <SignOutButton redirectUrl="/sign-in">
            <div className="flex cursor-pointer gap-4 p-[4px] hover:bg-[#dee1ec] hover:rounded-sm hover:transition-all">
              <Image src='/assets/logout-icon.svg' alt="logout" width={20} height={20} />
              {/* <p className="text-light-2 max-lg:hidden">Logout</p> */}
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </nav>
  );
}
