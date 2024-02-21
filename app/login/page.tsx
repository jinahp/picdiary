"use client";

import LogoSvg from "@/public/svg/logo.svg";
import styles from "@/styles/main.module.scss";
import Login from "../Login";

export default function LoginPage() {
  return (
    <div className={styles["main-container"]}>
      <LogoSvg className={styles.logo} />
      <Login />
    </div>
  );
}
