"use client";

import styles from "@/styles/login.module.scss";
import Link from "next/link";
import Button from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/authApi";
import { useRouter } from "next/navigation";
import GoogleLoginPage from "./GoogleLoginPage";

const passwordPattern = /^[A-Za-z0-9!@^&*#]+$/;

export default function Login() {
  const { error, isError, mutate } = useMutation({ mutationFn: login });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<Auth>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<Auth> = (data) => {
    mutate(data, {
      onError: (error) => {
        console.error(error);
      },
      onSuccess: async (data) => {
        console.log("data:", data);
        sessionStorage.setItem("token", data.token);
        router.push("/calendar");
      },
    });
  };

  return (
    <>
      <div className={styles["login-container"]}>
        <form
          className={styles["login-input-container"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            className={styles["login-input"]}
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
          <div className={styles["login-error"]}>
            {errors.email && errors.email.message}
          </div>

          <input
            type="password"
            autoComplete="off"
            className={styles["login-input"]}
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자 이상이어야 합니다.",
              },
              maxLength: {
                value: 13,
                message: "비밀번호는 최대 10자여야 합니다.",
              },
              pattern: {
                value: passwordPattern,
                message:
                  "영문 대소문자와 숫자, 특수문자 '!, @, ^, &, *, #'만 허용됩니다.",
              },
              validate: {
                validCharacters: (value) =>
                  passwordPattern.test(value) ||
                  "비밀번호는 영문 대소문자, 숫자, !, @, ^, &, *, #만 허용됩니다.",
              },
            })}
          />
          <div className={styles["login-error"]}>
            {errors.password && errors.password.message}
          </div>

          <div className={styles["login-password-container"]}>
            <Link href={"/"}>
              <div className={styles["find-password"]}>비밀번호 찾기</div>
            </Link>
          </div>

          <Button
            text="OPEN"
            disabled={!isDirty || !isValid}
            className={`${styles.button} ${styles["login-btn"]}`}
          />

          {isError && (
            <div className={styles["login-error"]}>{error.message}</div>
          )}
        </form>
        <hr className={styles["login-hr"]} />
        <GoogleLoginPage />
      </div>

      <Link href={"/sign-up"}>
        <div className={styles["login-link-box"]}>
          <span className={styles["login-link-heart"]} />
          <button className={styles["login-link-text"]} />
          <span className={styles["login-link-heart"]} />
        </div>
      </Link>
    </>
  );
}
