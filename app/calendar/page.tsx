"use client";

import CalendarCells from "@/containers/calendar/CalendarCells";
import CalendarDays from "@/containers/calendar/CalendarDays";
import CalendarHeader from "@/containers/calendar/CalendarHeader";
import styles from "@/styles/calendar.module.scss";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "../../containers/header/Header";

interface CalendarProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Calendar(props: CalendarProps) {
  const date = new Date();
  const [currentMonth, setCurrentMonth] = useState<Date>(date);
  const [selectedDate, setSelectedDate] = useState<Date>(date);
  const [nowDate, setNowDate] = useState<string>(
    moment(date).format("YYYY년 M월 DD일"),
  );
  const [isClose, setIsClose] = useState<boolean>(false);
  const router = useRouter();

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
    const formattedDate = moment(date).format("YYYYMMDD"); // 날짜 형식에 맞게 포맷 변경
    router.push(`/diary/${formattedDate}`); // 클라이언트 측 라우팅으로 이동
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
          오늘은 {nowDate}
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
