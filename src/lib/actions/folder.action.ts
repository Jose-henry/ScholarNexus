'use server'

import { revalidatePath } from "next/cache";
import prisma from "@/utils/connect";
interface props {
    folderName: string;
    category: string;
    path:     string
}
export default function createFolder({
    folderName,
    category,
    path}: props) {




    
}