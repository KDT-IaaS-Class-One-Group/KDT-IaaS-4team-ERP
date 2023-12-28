'use client';

import { usePathname } from 'next/navigation';

export default function RoomLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  const extractedString = usePathname().split("/").pop();
  return (
    <div id='root' className='w-screen h-screen'>
      <div className='upper outline outline-1 w-full h-1/5 flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-slate-900 font-bold mb-4'>{extractedString}반에 오신 걸 환영합니다.</h1>
        <h3>강사 : 
          {/* 강사 이름이 들어갈 자리 */}
        </h3>
        <h3>과목 : 
          {/* 과목이 들어갈 자리 */}
        </h3>
      </div>
      <div className='lower w-full h-4/5 flex justify-center items-center gap-6'>
        {children}
        {/* 이 자리에는 객체의 컴퓨터 갯수만큼 컴포넌트가 호출이 됩니다. */}
        {/* 그 후 1번 컴퓨터 부터 학생의 이름이 들어갑니다. */}
      </div>
    </div>
  );
}  