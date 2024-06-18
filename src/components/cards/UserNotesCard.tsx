"use client"

import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";

interface Props {}

export default function UserNotesCard() {
    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3 flex flex-col gap-2">
            <h2 className="text-[14px] font-bold">Notes</h2>
            <div className="flex-1 flex flex-col gap-2 min-h-0"> {/* Parent should have flex-1 and min-h-0 */}
                <div className="bg-[#dee1ec] p-2 rounded-sm h-[280px] overflow-y-scroll grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '10px' }}>
                    {/* Using grid with responsive columns and a gap of 10px */}
                    <div className="w-[80px] flex flex-col items-center">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                        <h2 className="text-[11px] font-semibold text-center w-[90%]">Default folder</h2>
                    </div>
                    <div className="w-[80px] flex flex-col items-center">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                        <h2 className="text-[11px] font-semibold text-center w-[90%]">Default folder</h2>
                    </div>
                    <div className="w-[80px] flex flex-col items-center">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                        <h2 className="text-[11px] font-semibold text-center w-[90%]">Default folder</h2>
                    </div>
                    <div className="w-[80px] flex flex-col items-center">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                        <h2 className="text-[11px] font-semibold text-center w-[90%]">Default folder</h2>
                    </div>
                    <div className="w-[80px] flex flex-col items-center">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                        <h2 className="text-[11px] font-semibold text-center w-[90%]">Default folder</h2>
                    </div>
                    <div className="w-[80px] flex flex-col items-center">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                        <h2 className="text-[11px] font-semibold text-center w-[90%]">Default folder</h2>
                    </div>
                    <div className="w-[80px] flex flex-col items-center">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                        <h2 className="text-[11px] font-semibold text-center w-[90%]">Default folder</h2>
                    </div>
                    <div className="w-[80px] flex flex-col items-center">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                        <h2 className="text-[11px] font-semibold text-center w-[90%]">Default folder</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
