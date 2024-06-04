
import { Inter } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className} style={{ height: "100vh" }} >
        <div id="wrapper" className="h-[100%] flex">
          <NavBar />
          <div id="content" className="bg-white w-[100%] flex flex-col h-[100%]">
            <header>
                <TopBar />
            </header>
            <main className="flex-1 bg-white">
                <h1 className="text-black">Main content</h1>
                {children}
            </main>
            <footer>
                <BottomBar />
            </footer>
          </div>
        </div>
      </body>
    </html>

    </ClerkProvider>
  );
}