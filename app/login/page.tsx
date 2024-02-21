"use client";

import logo from "@/public/assets/imgs/logo.svg";
import styles from "@/styles/main.module.scss";
import Image from "next/image";
import Login from "../Login";

export default function LoginPage() {
  return (
    <div className={styles["main-container"]}>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <Login />
    </div>
  );
}
