import { Classroom } from '../types/Classroom';

interface ClassroomDetailsProps {
  roomDetails: Classroom;
}

function ClassroomDetails({ roomDetails }: ClassroomDetailsProps) {
  return (
    <div>
      <p className='text-xl font-bold'>강사</p>
      <p className='mb-2'>{roomDetails.instructor}</p>
      <p className='text-xl font-bold'>분야</p>
      <p className='mb-2'>{roomDetails.field}</p>
      <p className='text-xl font-bold'>컴퓨터 수</p>
      <p className='mb-2'>{roomDetails.computers}</p>
      <div>
        <p className='text-xl font-bold'>학생</p>
        <ul className='flex flex-wrap'>
          {roomDetails.students.map((student, index) => (
            <li key={index} className='mr-4'>
              {student}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ClassroomDetails;
