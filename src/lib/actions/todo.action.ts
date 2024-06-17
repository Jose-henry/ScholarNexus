"use server";

import prisma from "@/utils/connect";
import { revalidatePath } from "next/cache";


interface ToDoParams {
  title: string;
  description?: string;
  deadline: Date;
  completed: boolean;
  priority?: string;
  userId: string;
}

export async function upsertToDo({
  title,
  description,
  deadline,
  completed,
  priority,
  userId,
}: ToDoParams): Promise<void> {
  try {
    // Check if a ToDo with the given userId exists
    const existingToDo = await prisma.toDo.findFirst({
      where: { userId: userId },
    });

    let todo;
    if (existingToDo) {
      // Update the existing ToDo
      todo = await prisma.toDo.update({
        where: { id: existingToDo.id },
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
      // Create a new ToDo
      todo = await prisma.toDo.create({
        data: {
          title,
          description,
          deadline,
          completed,
          priority,
          userId,
          createdAt: new Date(), // Set the created date to now
        },
      });
    }
    // Handle success, e.g., return todo or send a success response
  } catch (error: any) {
    throw new Error(`Error creating or updating ToDo: ${error.message}`);
  }
}