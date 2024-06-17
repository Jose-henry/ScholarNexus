"use server";

import prisma from "@/utils/connect";
import { revalidatePath } from "next/cache";

interface Params {
    userId: string;
    accepted: boolean;
    rejected: boolean;
    pending: boolean;
    blocked: boolean;
    path: string;
  }
  
  export async function Upsert({ userId, accepted, rejected, pending, blocked, path }: Params): Promise<void> {
    try {
      // Check if a friend relationship with the given userId and friendId exists
      const existingFriend = await prisma.friend.findFirst({
        where: { userId: userId},
      });
  
      let friend;
  
      if (existingFriend) {
        // Update the existing friend relationship
        friend = await prisma.friend.update({
          where: { id: (existingFriend.id) },
          data: {
            accepted,
            rejected,
            pending,
            blocked,
            updatedAt: new Date(), // Set the updated date to now
          },
        });
      } else {
        // Create a new friend relationship
        friend = await prisma.friend.create({
          data: {
            userId,
            accepted,
            rejected,
            pending,
            blocked,
            createdAt: new Date(), // Set the created date to now
          },
        });
      }
      // Handle success, e.g., return friend or send a success response
      if (path === "/home" || path === "/groups") {
        revalidatePath(path);
    }
    } catch (error: any) {
      throw new Error(`Error creating or updating friend: ${error.message}`);
    }
  }
  
  