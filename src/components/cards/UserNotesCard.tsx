"use client"

import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";

interface Props {}

export default function UserNotesCard() {
    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3 flex flex-col gap-2">
            <h2 className="text-[14px] font-bold">Notes</h2>
            <div className="flex-1 flex flex-col gap-2 min-h-0"> {/* Parent should have flex-1 and min-h-0 */}
                <div className="">

                </div>
                <div className="bg-[#dee1ec] p-2 rounded-sm  h-[200px] overflow-y-scroll">
                    <div className="w-fit">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={60} height={60} />
                        <h2 className="text-[11px] font-semibold text-center">Default folder</h2>
                    </div>
                    <div className="w-fit">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={60} height={60} />
                        <h2 className="text-[11px] font-semibold text-center">Default folder</h2>
                    </div>
                    <div className="w-fit">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={60} height={60} />
                        <h2 className="text-[11px] font-semibold text-center">Default folder</h2>
                    </div>
                    <div className="w-fit">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={60} height={60} />
                        <h2 className="text-[11px] font-semibold text-center">Default folder</h2>
                    </div>
                    <div className="w-fit">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={60} height={60} />
                        <h2 className="text-[11px] font-semibold text-center">Default folder</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
