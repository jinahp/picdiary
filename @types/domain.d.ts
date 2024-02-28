interface Auth {
  email: string;
  password: string;
  data?: string;
}

interface Diary {
  diaryId: string;
  content: string;
  date: string;
  emotion: string;
  imageUrl: string;
}

interface Todo {
  date: string;
  content: string;
  toDoId: string;
  isCompleted: boolean;
}

interface CalendarHeaderProps {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
}

interface CalendarCellsProps {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (date: Date) => void;
}
