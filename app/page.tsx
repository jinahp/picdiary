import LogoSvg from "@/public/svg/logo.svg";
import styles from "@/styles/main.module.scss";
import LoginCheck from "./LoginCheck";

export default function Main() {
  return (
    <div className={styles["main-container"]}>
      <LogoSvg className={styles.logo} />
      <LoginCheck />
    </div>
  );
}
