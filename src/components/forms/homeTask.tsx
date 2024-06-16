"use client"

import * as React from "react"
import { Calendar, MoreHorizontal, Tags, Trash, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import ToDoBtn from "./toDoBtn"

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]

export function HomeTaskMenu() {    
  const [label, setLabel] = React.useState("label")
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col items-start justify-between px-3 py-2 sm:flex-row sm:items-center bg-white border-b-[1px] border-b-[#929aab]">
      <div className="flex gap-4 items-center w-[90%]">
        <ToDoBtn />
        <p className="text-sm font-medium leading-none w-[100%]">
          <span className="mr-2 rounded-full w-[80px] px-2 py-1 text-xs text-primary-foreground bg-[#142d4c]">
            {label}
          </span>
          <input className="p-2 outline-none bg-white w-[80%] text-[13px]" placeholder="Enter task..."></input>
        </p>
      </div>
    </div>
  )
}
