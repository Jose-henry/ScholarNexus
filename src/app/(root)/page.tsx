'use client';
import { Button} from "@nextui-org/button";
import { redirect } from "next/navigation";
export default function Home() {

  const handler = () => {
    redirect("/sign-in");
  }

  const handlerr = () => {
    redirect("/sign-in");
  }
  return (
    <>
    <div>Landing page</div>

    <div className="bg-gray-400 w-[150px] h-[150%] rounded-xl border-2 border-dark-400 inline-block">
      <Button color="primary" onClick={() => {handler}} className="w-[100%]">
        Sign in
      </Button>

    </div>
    <div className="bg-gray-400 w-[150px] h-[150%] rounded-xl border-2 border-dark-400 inline-block">
      <Button color="primary" onClick={() => {handlerr}} className="w-[100%]">
        Sign up
      </Button>

    </div>
    </>
  );
}