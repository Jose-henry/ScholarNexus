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
}: FolderProps): Promise<void> {
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
      where: { createdById: createdById },
      select: {
        id: true,
        folderName: true,
        category: true,
        createdById: true,
        parentFolderId: true,
      },
    });
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
        },
      });
      return folders;
    } catch (error: any) {
      throw new Error(`Error getting folders: ${error.message}`);
    }
  }
  