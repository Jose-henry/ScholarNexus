import Image from "next/image"

export default function UserNotesCard() {
    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3 flex flex-col gap-3">
            <h2 className="text-[14px] font-bold">Notes</h2>
            <div>
                <div className="border-[2px] border-[#d3d6db] p-1 pl-3 flex items-center">
                    <Image width="16" height="16" className="mr-2" src="/assets/search-icon.svg" alt="search" />
                    <input type="input" placeholder="Search note by title..." className="text-[12.5px] w-full p-1"></input>
                </div>
                <div className="bg-[#dee1ec] p-2 h-[250px] overflow-y-scroll grid grid-cols-6 gap-3">
                    {["Biology", "Chemistry", "Physics", "Mathematics", "Geography", "History", "Literature", "Philosophy", "Art", "Music", "Philisophy", "Science", "Literature", "Philosophy", "Art", "Music", , "Literature", "Philosophy", "Art", "Music", , "Literature", "Philosophy", "Art", "Music"].map(subject => (
                        <div key={subject} className="w-[80px] h-[80px] flex flex-col p-2 items-center bg-white rounded-sm shadow-md">
                            <Image src="/assets/folder-icon.svg" alt="folder" width={50} height={50} />
                            <h2 className="text-[11px] font-semibold text-center">{subject}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
