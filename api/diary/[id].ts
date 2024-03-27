import axios, { AxiosRequestConfig } from "axios";

// 다이어리 생성
export const createDiary = async (diaryData: Diary) => {
  const res = await axios.post("/diaries/", diaryData);
  console.debug(res);
  return res.data;
};

// 특정 날짜의 다이어리 조회
export const getDiary = async (date: string, config?: AxiosRequestConfig) => {
  const res = await axios.get<Diary>(`/diaries/${date}`, config);
  console.debug(res);
  return res.data;
};

// 다이어리 수정
export const updateDiary = async (diaryId: number, updatedData: any) => {
  const res = await axios.patch(`/diaries/${diaryId}`, updatedData);
  console.debug(res);
  return res.data;
};

// 다이어리 삭제
export const deleteDiary = async (diaryId: number) => {
  const res = await axios.delete(`/diaries/${diaryId}`);
  console.debug(res);
  return res.data;
};
