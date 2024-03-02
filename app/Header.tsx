"use client";

import styles from "@/styles/header.module.scss";
import LogoSvg from "@/public/svg/logo.svg";
import Link from "next/link";
import Button from "./Button";
import useSession from "./hooks/useSession";
import { forwardRef, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [token, setToken] = useSession("token");
  const [open, setOpen] = useState<boolean>(false);

  const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClickLogout = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExit = () => {
    setOpen(false);
    if (!token) return;
    setToken("");
    router.push("/");
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <LogoSvg className={styles.logo} />
      </Link>
      <Button
        text={"로그아웃"}
        className={styles["logout-button"]}
        onClick={handleClickLogout}
      />
      {open && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          disableScrollLock
          disableEnforceFocus
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <DialogContentText className={styles["dialog-description"]}>
              다이어리 작성을 마치셨나요? 로그아웃하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions className={styles["dialog-actions"]}>
            <Button
              className={styles["header-modal-btn"]}
              text="끝내기"
              onClick={handleExit}
            />
            <Button
              className={styles["header-modal-btn-back"]}
              text="돌아가기"
              onClick={handleClose}
            />
          </DialogActions>
        </Dialog>
      )}
    </header>
  );
}
