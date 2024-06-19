// components/cards/FolderCard.tsx
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface FolderCardProps {
  id: string;
  folderName: string;
  category?: string;
  userId: string;
}

export default function FolderCard({ id, folderName, category, userId }: FolderCardProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/folder/${id}`);
  };

  return (
    <div className="w-[250px] rounded-lg bg-gray-100 p-4 shadow-md flex items-center gap-4 cursor-pointer" onClick={onClick}>
      <Image src="/assets/folder-icon.svg" alt="folder" width={40} height={40} />
      <div>
        <h3 className="text-lg font-semibold">{folderName}</h3>
        {category && <p className="text-sm text-gray-500">{category}</p>}
      </div>
    </div>
  );
}
