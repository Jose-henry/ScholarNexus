"use client"
import React from "react";
import {useRouter} from "next/navigation"
import { Button } from "@nextui-org/button";

export default function InterestForm() {
    const router = useRouter();
    return (
        <>
            <Button size="md"  className="bg-[#17132a] text-white hover:bg-slate-400 " onClick={() => router.push('/onboarding')}>
                Next
            </Button>
        </>
    )
}