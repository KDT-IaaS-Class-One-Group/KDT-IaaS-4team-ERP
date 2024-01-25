import React, { FC, MouseEventHandler } from 'react';

interface ProdWritingButtonProps {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}


const ProdWritingButton: FC<ProdWritingButtonProps> = ({ value, onClick }) => {
  return (
    <button type="button" className="w-36 h-16 bg-slate-600 rounded-md mt-2 cursor-pointer " onClick={onClick}>
      {value}
    </button>
  );
};

export default ProdWritingButton;
