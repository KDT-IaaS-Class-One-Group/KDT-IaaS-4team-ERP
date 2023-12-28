export interface Classroom {
  instructor: string;
  field: string;
  computers: number;
  students: string[];
}

export interface Classrooms {
  [key: string]: Classroom;
}
