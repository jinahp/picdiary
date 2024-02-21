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
