'use client';

import AccordionItem from './components/AccordionItem';
import classroomData from './databases/classroom.json';
import ClassroomDetails from './components/ClassroomDetails';
import SearchInput from './components/SearchInput';
import { Classrooms } from './types/classroom';
import useClassroomSearch from './hooks/useClassroomSearch';

const classrooms: Classrooms = classroomData;

export default function Home() {
  const { searchTerms, setSearchTerms, searchResults } = useClassroomSearch(
    classrooms,
    {
      room: '',
      instructor: '',
      field: '',
      computers: '',
      student: '',
    },
  );

  function handleSearch(key: keyof typeof searchTerms) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setSearchTerms({ ...searchTerms, [key]: e.target.value });
    };
  }

  return (
    <div className='p-8'>
      <SearchInput
        placeholder='교실 검색'
        value={searchTerms.room}
        onChange={handleSearch('room')}
      />
      <SearchInput
        placeholder='강사 검색'
        value={searchTerms.instructor}
        onChange={handleSearch('instructor')}
      />
      <SearchInput
        placeholder='분야 검색'
        value={searchTerms.field}
        onChange={handleSearch('field')}
      />
      <SearchInput
        placeholder='컴퓨터 수 검색'
        value={searchTerms.computers}
        onChange={handleSearch('computers')}
      />
      <SearchInput
        placeholder='학생 검색'
        value={searchTerms.student}
        onChange={handleSearch('student')}
      />

      {Object.entries(searchResults).map(([roomKey, roomDetails]) => (
        <AccordionItem key={roomKey} title={`${roomKey}`}>
          <ClassroomDetails roomDetails={roomDetails} />
        </AccordionItem>
      ))}
    </div>
  );
}
