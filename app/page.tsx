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
        <AccordionItem key={roomKey} title={`${roomKey}`}>
          <p className='text-xl font-bold'>강사</p>
          <p className='mb-2'>{roomDetails.instructor}</p>
          <p className='text-xl font-bold'>분야</p>
          <p className='mb-2'>{roomDetails.field}</p>
          <p className='text-xl font-bold'>컴퓨터 수</p>
          <p className='mb-2'>{roomDetails.computers}</p>
          <ul>
            <p className='text-xl font-bold'>학생</p>
            {roomDetails.students.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </AccordionItem>
      ))}
    </div>
  );
}
