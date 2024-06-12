import React from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface InterestBtnProps {
  text: string;
}

export default function InterestBtn({ text }: InterestBtnProps) {
  return (
    <Button
      size="sm"
      className="bg-[#ffffff] rounded-full text-[12px] shadow-sm hover:shadow-md hover:shadow-[#63686e] text-black pt-0 pb-0 border border-[#d3d6db]">
      <Image width="20" height="20" src="/assets/plus-icon.svg" alt="plus" />
      {text}
    </Button>
  );
}
