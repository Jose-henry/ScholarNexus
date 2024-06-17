
// lib/actions/friend.action.ts

import prisma from "@/utils/connect";
interface FriendParams {
  userId: string;
  username: string;
  email: string;
  accepted?: boolean;
  rejected?: boolean;
  pending?: boolean;
  blocked?: boolean;
}

export async function upsertFriend({
  userId,
  username,
  email,
  accepted = false,
  rejected = false,
  pending = true,
  blocked = false,
}: FriendParams): Promise<void> {
    
};
