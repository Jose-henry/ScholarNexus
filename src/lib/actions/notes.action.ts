'use server';

import { revalidatePath } from "next/cache";
import prisma from "@/utils/connect";

interface NoteProps {
  title: string;
  content: string;
  authorId: string;
  folderId: string;
  path: string;
}

export async function createOrUpdateNote({
  title,
  content,
  authorId,
  folderId,
  path,
}: NoteProps): Promise<void> {
  try {
    const note = await prisma.note.upsert({
      where: {
        // This ensures uniqueness of title within a folder for a user
        authorId_folderId_title: {
          authorId: authorId,
          folderId: folderId,
          title: title,
        },
      },
      update: {
        title,
        content,
        updatedAt: new Date(), // Ensure the updatedAt field is updated
      },
      create: {
        title,
        content,
        createdBy: { connect: { id: authorId } },
        noteFolder: { connect: { id: folderId } },
        createdAt: new Date(),
      },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Error creating or updating note: ${error.message}`);
  }
}

export async function getNotes(folderId: string): Promise<any> {
  try {
    const notes = await prisma.note.findMany({
      where: {
        folderId: folderId, // Correctly filter by folderId field
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        authorId: true,
        folderId: true,
      },
    });
    return notes;
    revalidatePath("/notes")
  } catch (error: any) {
    throw new Error(`Error getting notes: ${error.message}`);
  }
}




export async function getNotesById(folderId: string, id: string): Promise<any> {
  try {
    const notes = await prisma.note.findMany({
      where: {
        folderId: folderId,
        id: id // Correctly filter by folderId field
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        authorId: true,
        folderId: true,
      },
    });
    return notes;
    revalidatePath("/notes")
  } catch (error: any) {
    throw new Error(`Error getting notes: ${error.message}`);
  }
}

