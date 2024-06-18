"use server";

import prisma from "@/utils/connect";
import { revalidatePath } from "next/cache";

interface FriendParams {
  userId: string;
  accepted: boolean;
  rejected: boolean;
  pending: boolean;
  blocked: boolean;
  path: string;
}

export async function upsertFriend({
  userId,
  accepted,
  rejected,
  pending,
  blocked,
  path,
}: FriendParams): Promise<void> {
  try {
    // Check if a friend relationship with the given userId exists
    const existingFriend = await prisma.friend.findFirst({
      where: { userId },
    });

    let friend;

    if (existingFriend) {
      // Update existing friend relationship
      friend = await prisma.friend.update({
        where: { id: existingFriend.id },
        data: {
          accepted,
          rejected,
          pending,
          blocked,
          updatedAt: new Date(), // Set the updated date to now
        },
      });
    } else {
      // Create new friend relationship
      friend = await prisma.friend.create({
        data: {
          user: { connect: { id: userId } }, // Establish relation to User
          accepted,
          rejected,
          pending,
          blocked,
          createdAt: new Date(), // Set the created date to now
        },
      });
    }

    if (path === "/home" || path === "/groups") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Error creating or updating friend: ${error.message}`);
  }
}

export async function getFriends(userId: string): Promise<any> {
  try {
    const friends = await prisma.friend.findMany({
      where: { userId },
    });
    return friends;
  } catch (error: any) {
    throw new Error(`Error getting friends: ${error.message}`);
  }
}

export async function deleteFriend(id: string, path: string): Promise<void> {
  try {
    // Delete the friend
    await prisma.friend.delete({ where: { id } });
    if (path === "/home" || path === "/groups") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Error deleting friend: ${error.message}`);
  }
}
