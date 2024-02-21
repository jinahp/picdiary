"use client";

import { useSession } from "next-auth/react";
import Login from "./Login";

export default function LoginCheck({ Component }: any) {
  const { data: session, status, update } = useSession();
  if (status === "unauthenticated") {
    return <Login />;
  }
  return status;
}
