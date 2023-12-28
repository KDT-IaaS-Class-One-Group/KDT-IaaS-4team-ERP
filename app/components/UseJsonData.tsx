import { GetStaticProps } from 'next';
import { Classroom } from '../types/Classroom';

interface Props {
  classroomData: Classroom;
}

export default function UseJsonData({ classroomData }: Props) {
  return (
    <div>
      {Object.entries(classroomData).map(([room, details]) => (
        <div key={room}>
          <h1>{`Room ${room}`}</h1>
          <p className='text-xl font-bold'>Instructor</p>
          <p className='mb-2'>{details.instructor}</p>
          <p className='text-xl font-bold'>field</p>
          <p className='mb-2'>{details.field}</p>
          <p className='text-xl font-bold'>computers</p>
          <p className='mb-2'>{details.computers}</p>
          <p className='text-xl font-bold'>students</p>
          <p className='mb-2'>{details.students}</p>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async function () {
  const data = await import('../../public/databases/classroom.json');
  return {
    props: {
      classroomData: data.default,
    },
  };
};
