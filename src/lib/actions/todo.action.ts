


// "use server";

// import prisma from "@/utils/connect";
// import { revalidatePath } from "next/cache";





  

// interface Params {
//     title: string;
//     description?: string;
//     deadline: Date;
//     completed: boolean;
//     priority?: string;
//     userId: string;
//   }


//   export async function Upsert({
//     username,
//     email,
//     firstName,
//     lastName,
//     middleName,
//     dateOfBirth,
//     programme,
//     school,
//     level,
//     image,
//     bio,
//     onboarded,
//     interests,
//     path,
// }: Params):Promise<void> {
//     try {
//         const user = await prisma.user.upsert({
//             where: { clerkId: clerkId },
//             update: {
//                 username: username.toLowerCase(),
//                 firstName,
//                 lastName,
//                 middleName,
//                 dateOfBirth,
//                 programme,
//                 school,
//                 level,
//                 email,
//                 image,
//                 bio,
//                 interests: { set: interests },
//             },
//             create: {
//                 clerkId,
//                 username: username.toLowerCase(),
//                 firstName,
//                 lastName,
//                 middleName,
//                 dateOfBirth,
//                 programme,
//                 school,
//                 level,
//                 email,
//                 image,
//                 bio,
//                 onboarded,
//                 interests: { set: interests },
//             },
//         });
//         if (path === "/profile/edit" || path === "/profile") {
//             revalidatePath(path);
//         }
//     } catch (error:any) {
//         throw new Error("Error creating or updating user:", error.message);
//     }
// }