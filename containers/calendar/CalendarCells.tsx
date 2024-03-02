"use client";
import styles from "@/styles/calendarCells.module.scss";
import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useState } from "react";
export default function CalendarCells({
  currentMonth,
  selectedDate,
  onDateClick,
}: CalendarCellsProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const [clickedDate, setClickedDate] = useState<Date>();

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, "d");
      const cloneDay = day;
      const isCurrentMonth = isSameMonth(day, currentMonth);
      days.push(
        <div className={styles["cell-wrapper"]} key={day.toString()}>
          <div
            className={`${styles.cell} ${styles["cell-hover"]} ${
              !isCurrentMonth ? styles["not-current-month"] : ""
            }
            ${clickedDate === day ? styles["clicked"] : ""}`}
            key={day.toString()}
            onClick={() => {
              onDateClick(cloneDay);
              setClickedDate(cloneDay);
            }}
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
