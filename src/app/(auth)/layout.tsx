import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
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
      <body className={`${inter.className} `}style={{ backgroundImage: `url('/assets/low-poly-grid-haikeii.svg')` }}>
      <div className="w-full flex justify-center items-center min-h-screen">{children}</div>
      </body>
    </html>
    </ClerkProvider>
  );
}