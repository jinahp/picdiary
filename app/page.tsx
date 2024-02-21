import logo from "@/public/assets/imgs/logo.svg";
import styles from "@/styles/main.module.scss";
import Image from "next/image";
import LoginCheck from "./LoginCheck";

export default function Main() {
  return (
    <div className={styles["main-container"]}>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <LoginCheck />
    </div>
  );
}
