'use client';

import a from '@/util/parserFunc';
import b from '@/util/searchFunc';
import { usePathname } from 'next/navigation';

// json 데이터를 여기에 불러올 예정
const jsonData = {
  instructorName: "홍길동",
  subjectName: "웹 개발",
  computers: 10,
  students: ["학생1", "학생2", ] // 실제 학생 목록
};

let test = {};
a("../data/roomData.json")
  .then((data) => { test = JSON.parse(data); })
  .then(() => { console.log(test); })
  .catch((err) => { console.log(err); }); // json 데이터를 불러옵니다.


export default function RoomLayout () {
  
  const extractedString = usePathname().split("/").pop();
  // 컴퓨터 컴포넌트 배열 생성
  const computerComponents = [];
  for (let i = 0; i < jsonData.computers; i++) {
    computerComponents.push(
      <div key={i}>컴퓨터 {i + 1}: {jsonData.students[i] || '없음'}</div>
    );
  }

  return (
    <div id='root' className='w-screen h-screen'>
      <div className='upper outline outline-1 w-full h-1/5 flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-slate-900 font-bold mb-4'>{extractedString}반에 오신 걸 환영합니다.</h1>
        <h3>강사 : {jsonData.instructorName}
          {/* 강사 이름이 들어갈 자리 */}
        </h3>
        <h3>과목 : {jsonData.subjectName}
          {/* 과목이 들어갈 자리 */}
        </h3>
      </div>
      <div className='lower w-full h-4/5 flex justify-center items-center gap-6 flex-wrap'>
        {/* 이 자리에는 객체의 컴퓨터 갯수만큼 컴포넌트가 호출이 됩니다. */}
        {/* 그 후 1번 컴퓨터 부터 학생의 이름이 들어갑니다. */}
        {computerComponents}
      </div>
    </div>
  );
}  