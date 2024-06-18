
import { Nunito } from "next/font/google";
import "../globals.css"
import {
  ClerkProvider
} from '@clerk/nextjs';
import NavBar from "@/components/shared/NavBar"
import TopBar from "@/components/shared/topbar";
import BottomBar from "@/components/shared/bottombar";
import { Metadata } from "next";
import Image from "next/image"

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: '--font-nunito' 
});

export const metadata: Metadata = {
  title: {
    default: "Scholar Nexus",
    template: "%s | Scholar Nexus",
},
  description: "An Educational Productivity tool",
};



export default function RootLayout({
  children,
  create,
}: {
  children: React.ReactNode;
  create: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className} style={{ height: "100vh" }}>
          <div id="wrapper" className="hidden xl:flex h-[100%] sm:p-0 gap-[1%] bg-[#fafafa]">
            <NavBar />
            <div id="container" className="w-[100%] flex flex-col h-[100%]">
              <TopBar />
              <main className="flex-1 ml-[12px]">
                {children}
                {create}
              </main>
              
              <BottomBar />
            </div>
          </div>
          {/* Show message on md and below */}
          <div className="flex flex-col gap-3 justify-center items-center h-screen bg-black text-white xl:hidden">
  <Image src="/assets/eagle.svg" alt="logo" className="w-[40%] xl:w-3/4" width={30} height={30} />
  <h2 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Display size not optimized for responsiveness. Coming Soon!!</h2>
  <p className="text-center text-sm sm:text-base md:text-lg">Please use a larger screen</p>
</div>


        </body>
      </html>
    </ClerkProvider>
  );
}