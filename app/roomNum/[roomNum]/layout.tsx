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
        <h1>{extractedString}반에 오신 걸 환영합니다.</h1>
        <h3>강사 : </h3>
        <h3>과목 : </h3>
      </div>
      <div className='lower w-full h-4/5 flex justify-center items-center gap-6'>
        {children}
      </div>
    </div>
  );
}  