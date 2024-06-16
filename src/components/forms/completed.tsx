"use client"

import * as React from "react"
import ToDoBtn from "./toDoBtnCompleted"

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]

interface Props {
    title: string;
}

export function CompletedDropdownMenu({title}: Props) {    
  const [label, setLabel] = React.useState("label")
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col items-start justify-between px-3 py-2 sm:flex-row sm:items-center bg-white border-b-[1px] border-b-[#929aab]">
      <div className="flex gap-4 items-center w-[90%]">
        <ToDoBtn />
        <div className="text-sm font-medium leading-none w-[100%] flex gap-2">
          <span className="mr-2 rounded-full w-[80px] px-2 py-1 text-xs text-primary-foreground bg-[#142d4c]">
            Completed
          </span>
          <p className="line-through text-[13px]">{title}</p>
          <p className="line-through text-[13px]">{title}</p>
        </div>
      </div>
    </div>
  )
}
