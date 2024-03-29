"use client";

import styles from "@/styles/main.module.scss";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "../button/Button";
import Login from "./Login";
import useMounted from "../../app/hooks/useMounted";
import useSessionStorage from "../../app/hooks/useSessionStorage";

export default function LoginCheck({ Component }: any) {
  const { status, data: session } = useSession();
  const [token] = useSessionStorage("token");
  const mounted = useMounted();
  return (
    mounted && (
      <>
        {token || status === "authenticated" ? (
          <Link href="/calendar">
            <Button
              text={"🔒"}
              className={`${styles.button} ${styles["main-btn"]}`}
            />
          </Link>
        ) : (
          <Login />
        )}
      </>
    )
  );
}
