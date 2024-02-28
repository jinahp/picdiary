import styles from "@/styles/calendarDays.module.scss";

export default function CalendarDays() {
  const days = [];
  const date = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div key={i} className={styles.days}>
        {date[i]}
      </div>
    );
  }

  return (
    <div className={styles["days-wrapper"]}>
      <div className={styles["days-row"]}>{days}</div>
    </div>
  );
}
