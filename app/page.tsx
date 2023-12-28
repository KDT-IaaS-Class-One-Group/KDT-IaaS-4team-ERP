'use client';

import { GetStaticProps } from 'next';
import { Classroom } from './types/Classroom';

interface Props {
  classroomData: Classroom;
}

export default function Home() {
  return (
    <div>
      {Object.entries(classroomData).map(([room, details]) => (
        <div key={room}>
          <h1>{`Room ${room}`}</h1>
          <p>{`Instructor: ${details.instructor}`}</p>
          {/* 나머지 데이터도 이와 같이 UI에 표시할 수 있습니다. */}
        </div>
      ))}
    </div>
  );
}
