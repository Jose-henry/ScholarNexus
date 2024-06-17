


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
  }