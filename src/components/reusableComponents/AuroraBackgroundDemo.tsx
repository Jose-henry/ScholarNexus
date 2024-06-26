'use client'
//import { Button} from "@nextui-org/button";
import Link from "next/link";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";


export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-2 items-center justify-center px-4"
      >
        <Image src="/assets/logo-icon.svg" alt="Education cap" width={150} height={150} />
        <div className="text-5xl md:text-7xl font-bold dark:text-white text-center text-white">
          Scholar Nexus
        </div>
        <div className="font-light text-white text-base md:text-3xl dark:text-neutral-200 py-4">
          Elevating your education.
        </div>
        <div className="flex gap-[10px] ">
        <Link href="/sign-in">
        <button className="bg-black gap-3 dark:bg-white rounded-full w-[120px] shadow-sm shadow-white text-white text-md font-bold dark:text-black px-4 py-2">
          Sign in 
        </button>
        </Link>

       
        <Link href="/sign-in">
        <button className="bg-black dark:bg-white rounded-full w-[120px] shadow-sm shadow-white text-white text-md font-bold dark:text-black px-4 py-2">
          Sign up 
        </button>
        </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
