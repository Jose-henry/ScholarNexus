"use server";

import prisma from "@/utils/connect";
import { revalidatePath } from "next/cache";


interface Params {
    clerkId: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
    dateOfBirth: string;
    programme: string;
    school: string;
    level: string;
    image: string;
    bio: string;
    onboarded: boolean;
    interests: string[];
    path: string;
  }

  export async function create_Or_Update_User({
    clerkId,
    username,
    email,
    firstName,
    lastName,
    middleName,
    dateOfBirth,
    programme,
    school,
    level,
    image,
    bio,
    onboarded,
    interests,
    path,
}: Params):Promise<void> {
    try {
        const user = await prisma.user.upsert({
            where: { clerkId: clerkId },
            update: {
                username: username.toLowerCase(),
                firstName,
                lastName,
                middleName,
                dateOfBirth,
                programme,
                school,
                level,
                email,
                image,
                bio,
                interests,
            },
            create: {
                clerkId,
                username: username.toLowerCase(),
                firstName,
                lastName,
                middleName,
                dateOfBirth,
                programme,
                school,
                level,
                email,
                image,
                bio,
                onboarded,
                interests,
            },
        });
        if (path === "/profile/edit") {
            revalidatePath(path);
        }
    } catch (error:any) {
        throw new Error("Error creating or updating user:", error.message);
    }
}

//to upate username in clerk

// import { useUser } from '@clerk/nextjs';

// export default function UpdateUsernameComponent() {
//   const { user } = useUser();

//   async function updateUsername() {
//     if (user) {
//       try {
//         await user.update({ username: "new_username" });
//         alert("Username updated successfully");
//       } catch (err) {
//         console.error("Error updating username:", err);
//       }
//     }
//   }

//   return (
//     <button onClick={updateUsername}>Update Username</button>




export async function getUserByClerkId(clerkId: string) { 
    try {
        const user = await prisma.user.findUnique({
            where: {
                clerkId,
            },
        });
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}   