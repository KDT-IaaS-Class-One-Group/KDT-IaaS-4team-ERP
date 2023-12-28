import classroomData from './databases/classroom.json';

export default function Home() {
  return (
    <div>
      {Object.entries(classroomData).map(([roomKey, roomDetails]) => (
        <div key={roomKey}>
          <h2>{`교실: ${roomKey}`}</h2>
          <p>{`강사: ${roomDetails.instructor}`}</p>
          <p>{`분야: ${roomDetails.field}`}</p>
          <p>{`컴퓨터 수: ${roomDetails.computers}`}</p>
          <h3>학생 목록:</h3>
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
