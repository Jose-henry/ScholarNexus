import Image from "next/image";

export default function UserNotesCard() {
    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3">
            <h2 className="text-[14px] font-bold">Notes</h2>
            <div className="bg-[#dee1ec] p-2 rounded-sm h-[280px] overflow-y-scroll grid grid-cols-6 gap-3">
                {["Biology", "Chemistry", "Physics", "Mathematics", "Geography", "History", "Literature", "Philosophy", "Art", "Music", "Philisophy", "Science", "Literature", "Philosophy", "Art", "Music", , "Literature", "Philosophy", "Art", "Music", , "Literature", "Philosophy", "Art", "Music"].map(subject => (
                    <div key={subject} className="w-[80px] h-[80px] flex flex-col p-2 items-center bg-white rounded-sm shadow-md">
                        <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                        <h2 className="text-[11px] font-semibold text-center">{subject}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
