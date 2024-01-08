'use clinet'
import React, { FC, ChangeEventHandler } from 'react';

interface LogintextProps {
  title: string;
  inputchange: (value: string) => void;
}

const Logintext: FC<LogintextProps> = ({ title, inputchange }) => {
  return (
    <div className="flex h-20 m-2 w-full justify-between">
      <label htmlFor="Idiputtext" className="w-32 text-center flex justify-center items-center ">
        {`${title} :`}
      </label>
      <input
        type="text"
        id="Idiputtext"
        className="w-3/5 border-solid border-2"
        onChange={(e) => {
          inputchange(e.target.value);
        }}
      />
    </div>
  );
};

export default Logintext;
