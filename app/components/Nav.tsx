import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <div className='logo'>
        <h1>My Online Store</h1>
      </div>
      <ul className='flex space-x-4'>
        <li>
          <Link href='/' className='text-gray-800 hover:text-gray-600'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/products' className='text-gray-800 hover:text-gray-600'>
            Products
          </Link>
        </li>
        <li>
          <Link href='/cart' className='text-gray-800 hover:text-gray-600'>
            Contact
          </Link>
        </li>
        <li>
          <Link href='/orders' className='text-gray-800 hover:text-gray-600'>
            Orders
          </Link>
        </li>
        <li>
          <Link href='/support' className='text-gray-800 hover:text-gray-600'>
            Support
          </Link>
        </li>
        ;
      </ul>
    </nav>
  );
}
