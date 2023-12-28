'use client';

import AccordionItem from './components/AccordionItem';
import classroomData from './databases/classroom.json';
import { Classrooms } from './types/classroom';
import useClassroomSearch from './hooks/useClassroomSearch';

const classrooms: Classrooms = classroomData;

export default function Home() {
  const { searchTerm, setSearchTerm, searchResults } =
    useClassroomSearch(classrooms);

  return (
    <div className='p-8'>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='p-2 border border-gray-300 rounded'
        placeholder='교실 검색'
      />
      {Object.entries(searchResults).map(([roomKey, roomDetails]) => (
        <AccordionItem key={roomKey} title={`교실: ${roomKey}`}>
          <p>{`강사: ${roomDetails.instructor}`}</p>
          <p>{`분야: ${roomDetails.field}`}</p>
          <p>{`컴퓨터 수: ${roomDetails.computers}`}</p>
          <ul>
            {roomDetails.students.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </div>
  );
}
