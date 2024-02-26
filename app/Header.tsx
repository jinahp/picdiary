"use client";

import styles from "@/styles/header.module.scss";
import LogoSvg from "@/public/svg/logo.svg";
import Link from "next/link";
import Button from "./Button";
import useSession from "./hooks/useSession";

export default function Header() {
  const [token, setToken] = useSession("token");

  const handleLogout = () => {
    let isLogout = confirm("정말 로그아웃을 하실 건가요?🥹");
    if (isLogout) {
      alert("로그아웃 완료! 곧 다시 만나요🖐️");
      setToken("");
    }
  };
  return (
    <Link href="/">
      <header className={styles.header}>
        <LogoSvg className={styles.logo} />
        <Button
          text={"로그아웃"}
          className={styles["logout-button"]}
          onClick={handleLogout}
        />
      </header>
    </Link>
  );
}
