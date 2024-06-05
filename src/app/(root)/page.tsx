'use client';
import { Button} from "@nextui-org/button";
import Link from "next/link";
export default function Home() {

  
  return (
    <>
    <div>Landing page</div>

    <div className="bg-gray-400 w-[150px] h-[150%] rounded-xl border-2 border-dark-400 inline-block">
      <Button color="primary" className="w-[100%]">
        <Link href="/sign-in">
        Sign in
        </Link>
        
      </Button>

    </div>
    <div className="bg-gray-400 w-[150px] h-[150%] rounded-xl border-2 border-dark-400 inline-block">
      <Button color="primary" className="w-[100%]">
      <Link href="/sign-up">
      Sign up
        </Link>
      </Button>

    </div>
    </>
  );
}