'use client';
import { Button} from "@nextui-org/button";
import Link from "next/link";
export default function Home() {

  
  return (
    <>
    <div>Landing page</div>

    <div className="bg-gray-400 w-[150px] h-[150%] rounded-xl border-2 border-dark-400 inline-block">
    <Link href="/sign-in">
      <Button color="primary" className="w-[100%]">
        Sign in        
      </Button>
      </Link>

    </div>
    <div className="bg-gray-400 w-[150px] h-[150%] rounded-xl border-2 border-dark-400 inline-block">
    <Link href="/sign-up">
      <Button color="primary" className="w-[100%]">
      Sign up
      </Button>
      </Link>

    </div>
    </>
  );
}