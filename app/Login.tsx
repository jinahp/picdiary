import styles from "@/styles/login.module.scss";
import Button from "./Button";

export default function Login() {
  return (
    <div className={styles["login-container"]}>
      <input type="email" placeholder="이메일을 입력해주세요" />
      <input type="password" placeholder="비밀번호를 입력해주세요" />
      <Button text="OPEN" />
      <div className={styles["sign-up-link-box"]}>
        <span className={styles["sign-up-link-heart"]} />
        <button className={styles["sign-up-link-text"]} />
        <span className={styles["sign-up-link-heart"]} />
      </div>
    </div>
  );
}
