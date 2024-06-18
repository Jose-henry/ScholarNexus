import Image from "next/image";

export default function UserNotesCard() {
    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3">
            <h2 className="text-[14px] font-bold">Notes</h2>
            <div className="bg-[#dee1ec] p-2 rounded-sm h-[280px] overflow-y-scroll flex flex-wrap gap-4">
                {/* Use flex-wrap and gap to manage wrapping */}
                <div className="w-[80px] min-h-[70px] flex flex-col p-2 items-center border border-black">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center truncate-text">Anatomy and Socioalogy</h2>
                </div>
                <div className="w-[80px] flex flex-col items-center">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center mt-1">Default folder</h2>
                </div>
                <div className="w-[80px] flex flex-col items-center">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center mt-1">Default folder</h2>
                </div>
                <div className="w-[80px] flex flex-col items-center">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center mt-1">Default folder</h2>
                </div>
                <div className="w-[80px] flex flex-col items-center">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center mt-1">Default folder</h2>
                </div>
                <div className="w-[80px] flex flex-col items-center">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center mt-1">Default folder</h2>
                </div>
                <div className="w-[80px] flex flex-col items-center">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center mt-1">Default folder</h2>
                </div>
                <div className="w-[80px] flex flex-col items-center">
                    <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                    <h2 className="text-[11px] font-semibold text-center mt-1">Default folder</h2>
                </div>
            </div>
        </div>
    );
}
