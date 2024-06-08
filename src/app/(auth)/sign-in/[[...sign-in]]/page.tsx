import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Sign-in" };


export default function Page() {
  return <SignIn 
  appearance={{
    elements: {
      formButtonPrimary:
        "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
      card: " bg-gradient-to-r from-[#17132a] to-transparent opacity-80 backdrop-blur shadow-2xl",
      socialButtonsBlockButtons: "bg-slate-500 hover:bg-slate-400 text-sm normal-case", 
    },
  }}
  
  path="/sign-in" />;
}