'use client'

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";



export default function Interest() {

    const router = useRouter()


    return (
        <div className="flex flex-col justify-between gap-[650px]">
            <h1 className="font-black text-slate-300">Select at most four interests</h1>
            <Button size="md"  className="bg-[#17132a] text-white hover:bg-slate-400 " onClick={() => router.push('/onboarding')}>
                Next
            </Button>

        </div>
    )
}