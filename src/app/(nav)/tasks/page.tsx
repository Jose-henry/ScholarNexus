// pages/task.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { Metadata } from "next";
import TaskPage from "@/components/forms/TaskPage"; //client side component

export const metadata: Metadata = {
  title: "ToDo"
};

export default async function Task() {
  const User = await currentUser();
  if (!User) return null; // Handle unauthenticated state
  const userInfo = await getUserByClerkId(User.id);
  if (userInfo?.onboarded === false) {
    redirect("/onboarding");
  }

  return <TaskPage />; // Render the client-side component
}
