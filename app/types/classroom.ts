interface Student {
  name: string;
}

interface Classroom {
  instructor: string;
  field: string;
  computers: number;
  students: Student[];
}

interface Classrooms {
  [key: string]: Classroom;
}
