"use client"


import Image from "next/image";
import { redirect, useRouter } from "next/navigation";







export default function NotesComponent() {


    const Router = useRouter();

    const onClick = () => {
        Router.push("/notes/@create/(..notes)/1");}
    return (
        <div className="flex flex-col h-full pr-5 gap-6">
          <div
            className="h-[200px] rounded-sm overflow-hidden"
            style={{
              backgroundImage: "url('/assets/notes-bg.jpg')",
              backgroundSize: "cover", // Adjusts the background image size
              backgroundPosition: "center", // Centers the background image
            }}
          >
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <button className="text-[12px] font-bold bg-[#132743] text-white px-2 py-1 shadow-md rounded-full flex items-center gap-1 hover:bg-[#497285] active:bg-[#142d4c]" onClick={onClick}>
                <Image src="/assets/plus.svg" alt="folder" width={18} height={18} />
                Create folder
              </button>
              <div className="flex gap-1 items-center ml-3">
                <Image src="/assets/filter.svg" alt="folder" width={14} height={14} />
                <p className="text-[13.5px] font-bold text-[#132743]">Filter by: </p>
              </div>
              <button className="text-[12.5px] underline font-semibold hover:no-underline">Personal</button>
              <button className="text-[12.5px] underline font-semibold hover:no-underline">School</button>
              <button className="text-[12.5px] underline font-semibold hover:no-underline">Work</button>
            </div>
            <div className="border-t-[1px] border-t-black pt-2 h-[450px] overflow-y-scroll">
              <div className="w-fit">
                <Image src="/assets/folder-icon.svg" alt="folder" width={60} height={60} />
                <h2 className="text-[11px] font-semibold text-center">Default folder</h2>
              </div>
            </div>
          </div>
        </div>
      );
    }
    