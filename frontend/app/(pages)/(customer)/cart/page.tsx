// Cart page를 렌더링하는 파일입니다.
import CartMain from '@/app/components/cartComponents/CartMain';
import Link from 'next/link';

export default function Cart() {
  return (
    <div className='h-4/5 w-full'>
      <CartMain />
    </div>
  );
}
