'use server'

import { getUserByClerkId } from "@/lib/actions/user.action";
import TopBar from "./topbar"
import { currentUser } from "@clerk/nextjs/server";


export default async function TopBarServer() {

    const User = await currentUser();
    if (!User) return null; // to avoid typescript warnings


    const userInfo = await getUserByClerkId(User?.id);

    const imgUrl = userInfo?.image;
    const id = userInfo?.id;


    return (
        <>
            <TopBar imgUrl={imgUrl || ""} id={id || ""}/>
        </>
    )
}