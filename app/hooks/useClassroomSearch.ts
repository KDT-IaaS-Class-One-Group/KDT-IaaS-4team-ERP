import { useState, useEffect } from 'react';
import { Classrooms } from '../types/classroom';

function useClassroomSearch(
  classrooms: Classrooms,
  initialSearchTerm: string = '',
) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [searchResults, setSearchResults] = useState<Classrooms>(classrooms);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults(classrooms);
      return;
    }

    const filteredResults = Object.entries(classrooms).reduce(
      (acc, [key, value]) => {
        if (key.toLowerCase().includes(searchTerm.toLowerCase())) {
          acc[key] = value;
        }
        return acc;
      },
      {} as Classrooms,
    );

    setSearchResults(filteredResults);
  }, [searchTerm, classrooms]);

  return { searchTerm, setSearchTerm, searchResults };
}

export default useClassroomSearch;
