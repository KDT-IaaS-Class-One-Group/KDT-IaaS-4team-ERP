import React from 'react';

interface BtnProps {
  textContent: string;
}

const Btn: React.FC<BtnProps> = ({ textContent }) => {
  return (
    <button>{textContent}</button>
  );
}

export default Btn;