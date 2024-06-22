import { Nunito } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { dark } from "@clerk/themes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";


const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Specify the weights you want
  style: ['normal', 'italic'], // Specify the styles you want
  variable: '--font-nunito',
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
    className={`${nunito.variable}`}
    style={{
      backgroundImage: 'url("/assets/bg-img.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflowY: 'hidden',
    }}>
      <div className="w-full hidden xl:flex justify-center items-center h-screen">{children}</div>
      <ToastContainer
      hideProgressBar={true}
      theme="dark"
      position="bottom-right"
      autoClose={4000} />
      <div className="flex flex-col gap-3 justify-center items-center h-screen bg-black text-white xl:hidden">
  <Image src="/assets/eagle.svg" alt="logo" className="w-[25%] xl:w-3/4" width={30} height={30} />
  <h2 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Display size not optimized for responsiveness. Coming Soon!!</h2>
  <p className="text-center text-sm sm:text-base md:text-lg">Please use a larger screen</p>
</div>
    </body>
    </html>
    </ClerkProvider>
  );
}