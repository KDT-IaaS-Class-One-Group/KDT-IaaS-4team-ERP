import { useState, useEffect } from 'react';
import { Classrooms } from '../types/Classroom';

interface SearchTerms {
  room: string;
  instructor: string;
  field: string;
  computers: string;
  student: string;
}

function useClassroomSearch(
  classrooms: Classrooms,
  initialSearchTerms: SearchTerms,
) {
  const [searchTerms, setSearchTerms] =
    useState<SearchTerms>(initialSearchTerms);
  const [searchResults, setSearchResults] = useState<Classrooms>(classrooms);

  useEffect(() => {
    const filteredResults = Object.entries(classrooms)
      .filter(([key, value]) => {
        const roomMatch = key
          .toLowerCase()
          .includes(searchTerms.room.toLowerCase());
        const instructorMatch = value.instructor
          .toLowerCase()
          .includes(searchTerms.instructor.toLowerCase());
        const fieldMatch = value.field
          .toLowerCase()
          .includes(searchTerms.field.toLowerCase());
        const computersMatch = searchTerms.computers
          ? value.computers === parseInt(searchTerms.computers)
          : true;
        const studentMatch = searchTerms.student
          ? value.students.some((student) =>
              student.toLowerCase().includes(searchTerms.student.toLowerCase()),
            )
          : true;

        return (
          roomMatch &&
          instructorMatch &&
          fieldMatch &&
          computersMatch &&
          studentMatch
        );
      })
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {} as Classrooms);

    setSearchResults(filteredResults);
  }, [searchTerms, classrooms]);

  return { searchTerms, setSearchTerms, searchResults };
}

export default useClassroomSearch;
