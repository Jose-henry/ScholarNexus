


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
      const todo = await prisma.toDo.upsert({
        where: { userId: userId },
        update: {
          title,
          description,
          deadline,
          completed,
          priority,
        },
        create: {
          title,
          description,
          deadline,
          completed,
          priority,
          userId,
        },
      });
      // Handle success, e.g., return todo or send a success response
    } catch (error: any) {
      throw new Error(`Error creating or updating ToDo: ${error.message}`);
    }
  }