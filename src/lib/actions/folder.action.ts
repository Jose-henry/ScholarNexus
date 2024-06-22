"use server";
import prisma from "@/utils/connect";
import { revalidatePath } from "next/cache";

interface FolderProps {
    folderName: string;
    category: string;
    createdById: string;
    parentFolderId: string | null;
    path: string;
}

export async function createOrUpdateFolder({
  folderName,
  category,
  createdById,
  parentFolderId,
  path,
}: FolderProps): Promise<any> {
  try {
    const folder = await prisma.folder.upsert({
      where: {
        createdById_folderName: {
          createdById: createdById,
          folderName: folderName,
        },
      },
      update: {
        folderName,
        category,
      },

      create: {
        folderName,
        category,
        createdBy: { connect: { id: createdById } },
        parentFolder: parentFolderId ? { connect: { id: parentFolderId } } : undefined,
      },
    });
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error creating or updating folder: ${error.message}`);
  }
}

export async function getFolders(createdById: string): Promise<any> {
  try {
    const folders = await prisma.folder.findMany({
      where: {
        createdById: createdById,
        parentFolder: null , // Filter for only top-level folders
      },
      select: {
        id: true,
        folderName: true,
        category: true,
        createdById: true,
        parentFolderId: true,
      },
    });
    revalidatePath("/notes");
    return folders;
   
  } catch (error: any) {
    throw new Error(`Error getting folders: ${error.message}`);
  }
}

export async function getFoldersById(folderId: string): Promise<any> {
  try {
    const folders = await prisma.folder.findMany({
      where: { parentFolderId: folderId },
      select: {
        id: true,
        folderName: true,
        category: true,
        createdById: true,
        parentFolderId: true,
        parentFolder: {
          select: {
            folderName: true,
          },
        },
        subfolders: {
          select: {
            id: true,
            folderName: true,
            category: true,
            createdById: true,
            parentFolderId: true,
          },
        },
      },
    });

    revalidatePath("/notes/folders/" + folderId);
    return folders;
  } catch (error: any) {
    throw new Error(`Error getting folders: ${error.message}`);
  }
}

export async function deleteFolder(folderId: string): Promise<any> {
  try {
    await prisma.folder.delete({
      where: {
        id: folderId,
      },
    });
    revalidatePath("/notes");
  } catch (error: any) {
    throw new Error(`Error deleting folder: ${error.message}`);
  }
}
export async function getParentFolderName(folderId: string): Promise<any> {
  try {
    const folder = await prisma.folder.findUnique({
      where: {
        id: folderId,
      },
      select: {
            folderName: true,
      },
    });
    return folder?.folderName;
  } catch (error: any) {
    throw new Error(`Error getting parent folder name: ${error.message}`);
  }
}