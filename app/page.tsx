'use client';

import { useState } from 'react';
import classroomData from './databases/classroom.json';
import { Classrooms } from './types/classroom';

const classrooms: Classrooms = classroomData;

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Classrooms>({});

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    if (!event.target.value) {
      setSearchResults({});
      return;
    }

    const filteredResults = Object.entries(classrooms).reduce(
      (acc, [key, value]) => {
        if (key.toLowerCase().includes(event.target.value.toLowerCase())) {
          acc[key] = value;
        }
        return acc;
      },
      {} as Classrooms,
    );

    setSearchResults(filteredResults);
  };

  return (
    <div className='p-8'>
      <input
        type='text'
        value={searchTerm}
        onChange={handleSearch}
        className='p-2 border border-gray-300 rounded'
        placeholder='교실 검색'
      />
      {Object.entries(searchResults).map(([roomKey, roomDetails]) => (
        <div key={roomKey} className='mt-4'>
          <h3 className='font-bold'>{`교실: ${roomKey}`}</h3>
          <p>{`강사: ${roomDetails.instructor}`}</p>
          <p>{`분야: ${roomDetails.field}`}</p>
          <p>{`컴퓨터 수: ${roomDetails.computers}`}</p>
          <ul>
            {roomDetails.students.map((student) => (
              <li key={student}>{student}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
