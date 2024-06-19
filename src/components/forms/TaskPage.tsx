// components/TaskPage.tsx
'use client';

import { useState } from 'react';
import { ComboboxDropdownMenu } from "@/components/forms/toDo"
import AnalyticsCard from "@/components/cards/analyticsCard";
import Image from "next/image";
import { CompletedDropdownMenu } from "@/components/forms/completed";

const TaskPage: React.FC = () => {
  const [menus, setMenus] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);

  const handleAddMenu = () => {
    setMenus((prevMenus) => [...prevMenus, prevMenus.length]);
  };

  return (
    <div className="h-full flex flex-col gap-7 pr-5 pt-5">
      <AnalyticsCard />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 border-t-[1px] border-t-black pt-2">
          <button
            onClick={handleAddMenu}
            className="text-[12px] font-bold bg-[#132743] text-white px-2 py-1 shadow-md rounded-full flex items-center gap-1 hover:bg-[#497285] active:bg-[#142d4c]"
          >
            <Image src="/assets/plus.svg" alt="folder" width={18} height={18} />
            Add task
          </button>
          <div className="flex gap-1 items-center ml-3">
            <Image src="/assets/filter.svg" alt="folder" width={14} height={14} />
            <p className="text-[13.5px] font-bold text-[#132743]">Filter by: </p>
          </div>
          <button className="text-[12.5px] underline font-semibold hover:no-underline">Label</button>
          <button className="text-[12.5px] underline font-semibold hover:no-underline">Date</button>
          <button className="text-[12.5px] underline font-semibold hover:no-underline">Priority</button>
        </div>
        <div className="h-[365px] grid grid-cols-2 gap-4">
          <div className="flex flex-col h-full overflow-y-scroll p-0.5">
            {menus.map((id) => (
              <ComboboxDropdownMenu key={id} />
            ))}
          </div>
          <div className="rounded-sm p-2 flex flex-col gap-2 h-[365px]">
            <h2 className="text-[13px] font-semibold">Completed</h2>
            <div className="overflow-y-scroll h-full">
              <CompletedDropdownMenu title="Your completed tasks will appear here." />
              <CompletedDropdownMenu title="e.g see professor and submit paperwork." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
