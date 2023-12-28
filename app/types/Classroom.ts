export interface Student {
  name: string;
}

export interface Classroom {
  instructor: string;
  field: string;
  computers: number;
  students: Student[];
}

export interface Classrooms {
  [key: string]: Classroom;
}
