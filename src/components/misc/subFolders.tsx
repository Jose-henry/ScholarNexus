"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import FoldersCard from "../cards/subFolderCard";

interface FoldersComponentProps {
  folders: {
    id: string;
    folderName: string;
    category: string;
    createdById: string;
    parentFolderId: string; // Include parentFolderId in the type definition
  }[];
  parentFolderId: string;
  parentFolderName: string;
}

export default function FoldersSubComponent({ folders, parentFolderId, parentFolderName }: FoldersComponentProps) {
  const router = useRouter();

  const onClick = (parentFolderId: string) => {
    router.push(`/folders/${parentFolderId}/create-subfolder`);
  };

  const onClick2 = (parentFolderId: string) => {
    router.push(`/folders/${parentFolderId}/create-notes`);
  };

  return (
    <div className="flex flex-col h-full pr-5 gap-6">
      <div
        className="h-[200px] rounded-sm overflow-hidden"
        style={{
          backgroundImage: "url('/assets/notes-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <p className="text-[12px] text-[#132743] font-black">{parentFolderName}</p>
          <button
            className="text-[12px] font-bold bg-[#132743] text-white px-2 py-1 shadow-md rounded-full flex items-center gap-1 hover:bg-[#497285] active:bg-[#142d4c]"
            onClick={() => onClick(parentFolderId)}
          >
            <Image src="/assets/plus.svg" alt="folder" width={18} height={18} />
            Create folder
          </button>
          <button
            className="text-[12px] font-bold bg-[#132743] text-white px-2 py-1 shadow-md rounded-full flex items-center gap-1 hover:bg-[#497285] active:bg-[#142d4c]"
            onClick={() => onClick2(parentFolderId)}
          >
            <Image src="/assets/plus.svg" alt="folder" width={18} height={18} />
            Create Notes
          </button>
        </div>
        <div className="border-t-[1px] border-t-black pt-2 h-[450px] overflow-y-scroll">
          <div className="w-fit">
            <Image src="/assets/file.svg" alt="folder" width={60} height={60} />
            <h2 className="text-[11px] font-semibold text-center">Default file</h2>
            {/* Render folder cards here */}
            {folders && folders.map((folder) => (
              <FoldersCard
                key={folder.id}
                id={folder.id}
                folderName={folder.folderName}
                category={folder.category}
                userId={folder.createdById} // Pass createdById as userId
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}