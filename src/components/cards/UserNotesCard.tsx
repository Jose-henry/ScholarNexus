import Image from "next/image";

export default function UserNotesCard() {
    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3">
            <h2 className="text-[14px] font-bold">Notes</h2>
            <div className="bg-[#dee1ec] p-2 rounded-sm h-[280px] overflow-y-scroll grid grid-cols-6 gap-3">
                {/* Use flex-wrap and gap to manage wrapping */}
                <div className="w-[80px] h-[80px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center">Biology</h2>
                </div>
                <div className="w-[80px] h-[80px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center">Chemistry</h2>
                </div>
                <div className="w-[80px] h-[80px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center">Physics</h2>
                </div>
                <div className="w-[80px] h-[80px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center">Mathematics</h2>
                </div>
                <div className="w-[80px] h-[80px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center">Geography</h2>
                </div>
                <div className="w-[80px] h-[80px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center">History</h2>
                </div>
                <div className="w-[80px] h-[80px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center">Literature</h2>
                </div>
                <div className="w-[80px] h-[80px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center">Philosophy</h2>
                </div>
                <div className="w-[80px] h-[80px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center">Art</h2>
                </div>
                <div className="w-[80px] h-[80px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center">Music</h2>
                </div>
            </div>
        </div>
    );
}
