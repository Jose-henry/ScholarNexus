import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default function Task() {
  const User = currentUser();
  if (!User) redirect("/");
  return (
    <></>
  );
}