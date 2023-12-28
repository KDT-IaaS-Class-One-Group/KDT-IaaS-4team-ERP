import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b'>
      <button
        className='py-2 px-4 w-full text-left text-2xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className='py-2 px-5'>{children}</div>}
    </div>
  );
}

export default AccordionItem;
