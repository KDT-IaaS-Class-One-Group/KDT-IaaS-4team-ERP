'use clinet';
import React, { ChangeEvent } from 'react';

interface LoginTextProps {
  title: string;
  inputchange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LoginText: FC<LoginTextProps> = ({ title, inputchange }) => {
  return (
    <div className='flex h-20 m-2 w-full justify-between'>
      <label
        htmlFor='Idiputtext'
        className='w-36 text-center flex justify-center items-center '
      >
        {`${title} :`}
      </label>
      <input
        type='text'
        id='Idiputtext'
        className='w-3/5 border-solid border-2'
        onChange={(e) => {
          inputchange(e.target.value);
        }}
      />
    </div>
  );
};

export default LoginText;
