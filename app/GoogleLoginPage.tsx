import GoogleImage from "@/public/svg/ic-google.svg";
import styles from "@/styles/googleLogin.module.scss";
import Button from "./Button";
import { signIn } from "next-auth/react";

export default function GoogleLoginPage() {
  return (
    <Button
      className={styles["google-button"]}
      onClick={() => signIn("google")}
      disabled={false}
    >
      <GoogleImage alt="Google" />
      구글로 로그인하기
    </Button>
  );
}
