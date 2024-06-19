"use server";
import prisma from "@/utils/connect";
import { revalidatePath } from "next/cache";

export async function createOrUpdateFolder({
    folderName,
    category,
    userId,
    path,
}: {
    folderName: string;
    category: string;
    userId: string;
    path: string;
}): Promise<void> {
    try {
        const folder = await prisma.folder.upsert({
            where: {
                createdById_folderName: {
                    createdById: userId,
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
            select: {
                id: true,
                folderName: true,
                category: true,
                createdById: true, // Include createdById in the query
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
            where: {
                id: folderId,
            },
            select: {
                id: true,
                folderName: true,
                category: true,
                createdById: true,
            },
        });
        return folders;
    } catch (error: any) {
        console.error(`Error getting folders by ID: ${error.message}`);
        throw new Error(`Error getting folders by ID: ${error.message}`);
    }
}
