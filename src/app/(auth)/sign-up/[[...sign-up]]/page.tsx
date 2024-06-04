import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:"Sign-up" };


export default function Page() {
  return <SignUp path="/sign-up" />;
}