'use server'

import { revalidatePath } from "next/cache";
import prisma from "@/utils/connect";

interface Props {
    folderName: string;
    category: string;
    userId: string;
    path: string;
}

export async function createOrUpdateFolder({
    folderName,
    category,
    userId,
    path,
    
}: Props): Promise<void> {

    try {
        const folder = await prisma.folder.upsert({
            where: {
                createdById_folderName: {
                    createdById: userId,
                    folderName: folderName
                }
            },
            update: {
                folderName,
                category,
            },
            create: {
                folderName,
                category,
                createdBy: { connect: { id: userId } },
            },
        });
        
        revalidatePath(path);
    } catch (error: any) {
        throw new Error(`Error creating or updating folder: ${error.message}`);
    }
}



export async function getFolders(userId: string): Promise<any> {
    try {
      const folders = await prisma.folder.findMany({
        where: {
          createdById: userId, // Correctly filter by createdById field
        },
      });
      return folders;
    } catch (error: any) {
      throw new Error(`Error getting folders: ${error.message}`);
    }
  }