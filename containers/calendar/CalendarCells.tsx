import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subDays,
} from "date-fns";
import styles from "@/styles/calendarCells.module.scss";

export default function CalendarCells({
  currentMonth,
  selectedDate,
  onDateClick,
}: CalendarCellsProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = subDays(startOfWeek(monthStart), -1);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <div className={styles["cells-wrapper"]} key={day.toString()}>
          <div
            className={`${styles.cell} ${
              !isSameMonth(day, monthStart)
                ? styles.disabled
                : isSameDay(day, selectedDate)
                ? styles.selected
                : ""
            }`}
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className={styles["cells-number"]}>{formattedDate}</span>
          </div>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className={styles["cells-row"]} key={day.toString()}>
        {days}
      </div>
    );
    days = [];
  }
  return <div className={styles["cells-body"]}>{rows}</div>;
}
