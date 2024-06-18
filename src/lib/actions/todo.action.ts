"use server";

import prisma from "@/utils/connect";
import { revalidatePath } from "next/cache";

interface ToDoParams {
  id?: string; // Optional if you want to allow specifying ID during update
  title: string;
  description?: string;
  deadline: Date;
  completed: boolean;
  priority?: string;
  userId: string;
  path: string;
}

export async function upsertToDo({
  id,
  title,
  description,
  deadline,
  completed,
  priority,
  userId,
  path,
}: ToDoParams): Promise<void> {
  try {
    let todo;
    if (id) {
      // Update existing ToDo
      todo = await prisma.toDo.update({
        where: { id },
        data: {
          title,
          description,
          deadline,
          completed,
          priority,
          updatedAt: new Date(), // Set the updated date to now
        },
      });
    } else {
      // Create new ToDo
      todo = await prisma.toDo.create({
        data: {
          title,
          description,
          deadline,
          completed,
          priority,
          user: { connect: { id: userId } }, // Establish relation to User
          createdAt: new Date(), // Set the created date to now
        },
      });
    }

    if (path === "/home" || path === "/tasks") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Error creating or updating ToDo: ${error.message}`);
  }
}

export async function deleteToDo(id: string, path: string): Promise<void> {
  try {
    await prisma.toDo.delete({ where: { id } });
    if (path === "/home" || path === "/tasks") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Error deleting ToDo: ${error.message}`);
  }
}

export async function getToDos(userId: string): Promise<any> {
  try {
    const toDos = await prisma.toDo.findMany({
      where: { userId },
    });
    return toDos;
  } catch (error: any) {
    throw new Error(`Error getting ToDos: ${error.message}`);
  }
}
