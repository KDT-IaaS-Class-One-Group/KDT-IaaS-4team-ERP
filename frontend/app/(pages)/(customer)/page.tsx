// Customer page를 렌더링하는 파일입니다.

import CustomerMain from '../../components/homeComp/customerMain';

export default function Customer() {
  return (
    <div className='flex justify-center items-center flex-col w-screen h-screen overflow-y-scroll'>
      <CustomerMain />
    </div>
  );
}
