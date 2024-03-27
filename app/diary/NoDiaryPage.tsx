"use client";

import Button from "@/containers/button/Button";
import styles from "@/styles/noDiary.module.scss";
import moment from "moment";
import Link from "next/link";
import Header from "../../containers/header/Header";

interface NoContentDiaryProps {
  date: string;
}

export default function NoDiaryPage(props: NoContentDiaryProps) {
  return (
    <>
      <Header />
      <div className={styles["no-diary-wrapper"]}>
        <div className={styles["no-diary-selected-date-box"]}>
          {moment(props.date).format("yyyy. MM. DD. dddd")}
        </div>
        <div className={styles["no-diary-content-container"]}>
          <div className={styles["no-diary-content"]}>
            오늘의 일기가 없습니다.
          </div>
        </div>
        <div className={styles["no-diary-btn-content"]}>
          <Link href="/diary/post">
            <Button
              text="일기 작성하기"
              className={styles["btn-diary-write"]}
            />
          </Link>
          <Link href="/calendar">
            <Button text="뒤로 가기" className={styles["btn-back-calendar"]} />
          </Link>
        </div>
      </div>
    </>
  );
}
