
import { Nunito } from "next/font/google";
import "../globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import NavBar from "@/components/shared/NavBar";
import TopBar from "@/components/shared/topbar";
import BottomBar from "@/components/shared/bottombar";
import { Metadata } from "next";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
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
      <body className={nunito.className} style={{ height: "100vh" }} >
        <div id="wrapper" className="h-[100%] flex md:p-[20px] sm:p-0 bg-white gap-[2%]">
          <NavBar />
          <div id="container" className="bg-white w-[100%] flex flex-col h-[100%]">
            <TopBar />
            <main className="flex-1 border-[1px] border-black p-[10px]">
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