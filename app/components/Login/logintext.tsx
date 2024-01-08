'use client';
import React, { FC, ChangeEventHandler } from 'react';

interface LoginTextProps {
  title: string;
  inputchange: (value: string) => void;
}

const LoginText: FC<LoginTextProps> = ({ title, inputchange }) => {
  return (
    <div className='flex h-20 m-2 w-full justify-between'>
      <label
        htmlFor='Idiputtext'
        className='w-32 text-center flex justify-center items-center '
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
