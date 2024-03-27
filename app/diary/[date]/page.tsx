"use client";

import { deleteDiary, getDiary, updateDiary } from "@/api/diary/[id]";
import moment from "moment";
import { useEffect, useState } from "react";
import NoDiaryPage from "../NoDiaryPage";

export default function Diary({ params }: { params: Diary }) {
  const { date } = params;
  const [diary, setDiary] = useState<Diary | null>(null);
  const [nowDate, setNowDate] = useState<string>(
    moment(date).format("YYYY년 M월 DD일"),
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (date) {
          const res = await getDiary(date);
          setDiary(res);
        }
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, [date]);

  const handleDeleteDiary = async () => {
    try {
      if (date) {
        await deleteDiary(Number(date));
      }
    } catch (error) {
      console.error("Error deleting diary:", error);
    }
  };

  const handleUpdateDiary: () => void = async () => {
    try {
      if (date) {
        const updatedData = {};
        await updateDiary(Number(date), updatedData);
      }
    } catch (error) {
      console.error("Error updating diary:", error);
    }
  };

  if (!diary) {
    return <NoDiaryPage date={date} />;
  }

  return (
    <div>
      <div>오늘 {nowDate} 일기 작성</div>
      <button onClick={handleDeleteDiary}>Delete Diary</button>
      <button onClick={handleUpdateDiary}>Update Diary</button>
    </div>
  );
}
