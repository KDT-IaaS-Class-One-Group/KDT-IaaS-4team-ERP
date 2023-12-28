'use client';

import { useState } from 'react';
import classroomData from './databases/classroom.json';

function Tabs() {
  const [activeTab, setActiveTab] = useState('room_301');

  return (
    <div>
      <div className='flex'>
        {Object.keys(classroomData).map((roomKey) => (
          <button
            key={roomKey}
            className={`p-4 ${activeTab === roomKey ? 'font-bold' : ''}`}
            onClick={() => setActiveTab(roomKey)}
          >
            {roomKey}
          </button>
        ))}
      </div>
      <div className='p-4'>
        {Object.entries(classroomData).map(([roomKey, roomDetails]) => (
          <div
            key={roomKey}
            className={activeTab === roomKey ? 'block' : 'hidden'}
          >
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
    </div>
  );
}

export default function Home() {
  return (
    <div className='p-8'>
      <Tabs />
    </div>
  );
}
