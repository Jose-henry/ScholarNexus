
import { Nunito } from "next/font/google";
import "../globals.css"
import {
  ClerkProvider
} from '@clerk/nextjs';
import NavBar from "@/components/shared/NavBar";
import TopBar from "@/components/shared/topbar";
import BottomBar from "@/components/shared/bottombar";
import { Metadata } from "next";
import Image from "next/image";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className} style={{ height: "100vh" }}>
          {/* Hide layout on md and below */}
          <div id="wrapper" className="hidden xl:flex h-[100%] sm:p-0 gap-[1%] bg-[#fafafa]">
            <NavBar />
            <div id="container" className="w-[100%] flex flex-col h-[100%]">
              <TopBar />
              <main className="flex-1 ml-[12px]">
                {children}
              </main>
              <BottomBar />
            </div>
          </div>
          {/* Show message on md and below */}
          <div className="xl:hidden flex flex-col gap-3 justify-center items-center h-screen bg-black text-white">

          <Image src="/assets/eagle.svg" alt="logo" width={100} height={100} />
            <h2>Display size not optimized for responsiveness. Coming Soon!!</h2>
            <p>Please use a larger screen</p>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}