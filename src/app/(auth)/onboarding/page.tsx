import { Metadata } from "next";


/* Todo: in profile component
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const router = useRouter()
  useEffect(() => {
    router.push('/onboarding/interest')
  }, [router])
 */



export const metadata: Metadata = {
  title:"Onboarding" };


export default function Home() {
    return (
      <div>Onboarding</div>
    );
  }