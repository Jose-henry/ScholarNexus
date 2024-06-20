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
    dateOfBirth: Date;
    programme: string;
    school: string;
    level: string;
    image: string;
    bio: string;
    onboarded: boolean;
    interests: string[];
    path: string;
  }


  export async function Upsert({
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
                interests: { set: interests },
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
                interests: { set: interests },
            },
        });
        if (path === "/profile/edit" || path === "/profile") {
            revalidatePath(path);
        }
    } catch (error:any) {
        throw new Error("Error creating or updating user:", error.message);
    }
}

export async function updateInterests(clerkId: string, interests: string[], path: string) {
    try {
        await prisma.user.update({
            where: { clerkId },
            data: { interests: { set: interests } },
        });
        if (path === "/profile/edit" || path === "/profile") {
            revalidatePath(path)
        }
    } catch (error) {
        console.error("Error updating interests:", error);
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
export async function getUserById(id: string) { 
    try {
        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}   