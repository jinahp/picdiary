import styles from "@/styles/calendarHeader.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { format } from "date-fns";

export default function CalendarHeader({
  currentMonth,
  prevMonth,
  nextMonth,
}: CalendarHeaderProps) {
  return (
    <div className={styles["pic-calendar-wrapper"]}>
      <Icon
        icon="akar-icons:arrow-left"
        className={`${styles["prev-month"]} ${styles.icon}`}
        onClick={prevMonth}
      />
      <div className={styles["pic-calendar-header"]}>
        <div className={styles["year"]}>
          {format(currentMonth, "yyyy")}년 {format(currentMonth, "M")}월
        </div>
      </div>
      <Icon
        icon="akar-icons:arrow-right"
        className={`${styles["next-month"]} ${styles.icon}`}
        onClick={nextMonth}
      />
    </div>
  );
}
