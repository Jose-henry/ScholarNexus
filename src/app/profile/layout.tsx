
import { Nunito } from "next/font/google";
import "../globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import NavBar from "@/components/shared/NavBar";
import TopBar from "@/components/shared/topbar";
import BottomBar from "@/components/shared/bottombar";
import { Metadata } from "next";

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
      <body
      className={nunito.className}
      style={{
        height: "100vh"
      }}>
        <div id="wrapper" className="h-[100%] flex sm:p-0  gap-[1%] bg-[#fafafa]">
            <NavBar />
            <div id="container" className="w-[100%] flex flex-col h-[100%]">
              <TopBar />
              <main className="flex-1 ml-[12px] ">
                  {children}
              </main>
                <BottomBar />
            </div>
          </div>
      </body>
    </html>

    </ClerkProvider>
  );
}