"use client";

import LogoSvg from "@/public/svg/logo.svg";
import styles from "@/styles/signUp.module.scss";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { signUp } from "@/api/authApi";
import useSession from "../hooks/useSession";

interface SignUpProps {
  email: string;
  password: string;
  passwordConfirm: string;
  terms: boolean;
}

const passwordPattern = /^[A-Za-z0-9!@^&*]+$/;

export default function SignUp() {
  const { error, isError, mutate } = useMutation({ mutationFn: signUp });
  const router = useRouter();
  const [token, setToken] = useSession("token");

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<SignUpProps>({ mode: "all" });

  const onSubmit: SubmitHandler<SignUpProps> = (data) => {
    mutate(data, {
      onError: (error) => {
        console.error(error);
      },
      onSuccess: async (data) => {
        console.log("data:", data);
        setToken(data.token);
        router.push("/");
      },
    });
  };

  return (
    <div className={styles["sign-up-wrapper"]}>
      <Link href={"/"}>
        <LogoSvg className={styles.logo} />
      </Link>
      <form
        className={styles["sign-up-input-container"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          className={styles["sign-up-input"]}
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+\w{2,}$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
            maxLength: {
              value: 30,
              message: "이메일은 최대 30자여야 합니다.",
            },
          })}
        />
        <div className={styles["sign-up-error"]}>
          {errors.email && errors.email.message}
        </div>
        <input
          type="password"
          autoComplete="off"
          className={styles["sign-up-input"]}
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자 이상이어야 합니다.",
            },
            maxLength: {
              value: 10,
              message: "비밀번호는 최대 10자여야 합니다.",
            },
            pattern: {
              value: passwordPattern,
              message:
                "영문 대소문자와 숫자, 특수문자 '!, @, ^, &, *'만 허용됩니다.",
            },
          })}
        />
        <div className={styles["sign-up-error"]}>
          {errors.password && errors.password.message}
        </div>
        <input
          type="password"
          autoComplete="off"
          className={styles["sign-up-input"]}
          placeholder="비밀번호를 다시 입력해주세요."
          {...register("passwordConfirm", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자 이상이어야 합니다.",
            },
            maxLength: {
              value: 10,
              message: "비밀번호는 최대 10자여야 합니다.",
            },
            pattern: {
              value: passwordPattern,
              message:
                "영문 대소문자와 숫자, 특수문자 '!, @, ^, &, *'만 허용됩니다.",
            },
            validate: {
              matchesConfirmation: (value, { password }) =>
                value === password || "비밀번호가 일치하지 않습니다.",
            },
          })}
        />
        <div className={styles["sign-up-error"]}>
          {errors.passwordConfirm && errors.passwordConfirm.message}
        </div>
        <div className={styles["sign-up-terms"]}>
          <input
            id="terms"
            type="checkbox"
            className={styles["sign-up-terms-checkbox"]}
            {...register("terms", { required: "약관에 동의해주세요." })}
          />{" "}
          {errors.terms ? (
            <label htmlFor="terms" className={styles.terms}>
              약관에 동의해주세요.
            </label>
          ) : (
            <label htmlFor="terms" className={styles["sign-up-terms-label"]}>
              이용약관에 동의합니다.
            </label>
          )}
        </div>

        <Button
          className={`${styles.button} ${styles["sign-up-btn"]}`}
          disabled={!isDirty || !isValid}
          text="회원가입"
        />

        {isError && (
          <div className={styles["sign-up-error"]}>{error.message}</div>
        )}
      </form>
    </div>
  );
}
