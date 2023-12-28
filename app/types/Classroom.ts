export interface Classroom {
  instructor: string;
  field: string;
  computers: number;
  students: string[]; // Student[] 대신 string[] 사용
}

export interface Classrooms {
  [key: string]: Classroom;
}
