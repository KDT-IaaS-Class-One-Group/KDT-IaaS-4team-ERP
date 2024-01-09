import React, { FC, MouseEventHandler } from 'react';

interface LoginButtonProps {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const LoginButton: FC<LoginButtonProps> = ({ value, onClick }) => {
  return (
    <button type="button" className="w-36 h-16 border-solid border-2 mt-2 ml-2" onClick={onClick}>
      {value}
    </button>
  );
};

export default LoginButton;