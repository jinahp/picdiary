import styles from "@/styles/notFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.notFoundTitle}>404</div>
      <div className={styles.notFoundContent}>페이지를 찾을 수 없습니다.</div>
    </div>
  );
}
