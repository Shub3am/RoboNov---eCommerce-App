"use client";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Account() {
  const { data: Session, status } = useSession();
  console.log(status, Session, "From Dashbaord  ");
  if (status == "authenticated") {
    return <h1>Welcome {Session.user.name}, You Are In!</h1>;
  } else {
    redirect("/auth");
  }
}
