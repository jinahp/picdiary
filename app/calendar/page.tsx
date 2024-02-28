"use client";

import styles from "@/styles/calendar.module.scss";
import moment from "moment";
import { useState } from "react";
import Header from "../Header";
import CalendarHeader from "@/containers/calendar/CalendarHeader";
import CalendarCells from "@/containers/calendar/CalendarCells";
import CalendarDays from "@/containers/calendar/CalendarDays";

interface CalendarProps {
  value: Date;
}

export default function Calendar({ value }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [nowDate, setNowDate] = useState<string>(
    moment(value).format("YYYY년 M월 DD일")
  );
  const [isClose, setIsClose] = useState<boolean>(false);

  const prevMonth = () => {
    setCurrentMonth((prev) => {
      return new Date(prev.getFullYear(), prev.getMonth() - 1);
    });
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      return new Date(prev.getFullYear(), prev.getMonth() + 1);
    });
  };

  const onDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleToggleCalendar = () => {
    setIsClose(!isClose);
  };

  return (
    <>
      <Header />
      <div className={styles["page-wrapper"]}>
        <div
          className={styles["page-selected-date-box"]}
          onClick={handleToggleCalendar}
        >
          ♥ 오늘은 {nowDate} ♥
        </div>
        {!isClose && (
          <div className={styles.calendar}>
            <CalendarHeader
              currentMonth={currentMonth}
              prevMonth={prevMonth}
              nextMonth={nextMonth}
            />
            <CalendarDays />
            <CalendarCells
              currentMonth={currentMonth}
              selectedDate={selectedDate}
              onDateClick={onDateClick}
            />
          </div>
        )}
      </div>
    </>
  );
}
