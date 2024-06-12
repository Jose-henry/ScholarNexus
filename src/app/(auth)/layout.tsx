import { Nunito } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { dark } from "@clerk/themes";

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
  icons: {
    icon: ""
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: [dark],
      variables: { colorPrimary: '#9cb9d2' },
    }} >
    <html lang="en">
    <body
    className={`${nunito.className}`}
    style={{
      backgroundImage: 'url("/assets/bg-img.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="w-full flex justify-center items-center h-screen">{children}</div>
    </body>
    </html>
    </ClerkProvider>
  );
}
