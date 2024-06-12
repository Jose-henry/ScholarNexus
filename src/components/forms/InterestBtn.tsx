import React from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface InterestBtnProps {
  text: string;
  selected: boolean;
  onSelect: (text: string, selected: boolean) => void;

}

export default function InterestBtn({
  text,
  selected,
  onSelect,
}: InterestBtnProps) {
  return (
    <Button
      size="sm"
      className={`bg-[#ffffff] rounded-full text-[12px] shadow-sm hover:shadow-md hover:shadow-[#63686e] text-black pt-0 pb-0 border border-[#d3d6db] ${
        selected ? "bg-[#393e46] text-white" : ""
      }`}
      onClick={() => onSelect(text, !selected)}
    >
      {!selected && (
        <Image width="20" height="20" src="/assets/plus-icon.svg" alt="plus" />
      )}

      {text}
    </Button>
  );
}

