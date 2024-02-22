"use client";

import styles from "@/styles/main.module.scss";
import Link from "next/link";
import Button from "./Button";
import Login from "./Login";
import useSession from "./hooks/useSession";
import useMounted from "./hooks/useMounted";

export default function LoginCheck({ Component }: any) {
  const [token] = useSession("token");
  const mounted = useMounted();
  return (
    mounted && (
      <>
        {token ? (
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
