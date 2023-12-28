import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b'>
      <button
        className='py-2 px-4 w-full text-left'
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className='p-4'>{children}</div>}
    </div>
  );
};

export default AccordionItem;
