"use clinet";
import React, { ChangeEvent } from "react";

interface LoginTextProps {
  title: string;
  inputchange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LoginPassword: FC<LoginTextProps> = ({ title, inputchange }) => {
  return (
    <div className="flex h-20 m-2 w-full justify-between">
      <label
        htmlFor="Idiputtext"
        className="w-32 text-center flex justify-center items-center "
      >
        {`${title} :`}
      </label>
      <input
        type="password" // BEGIN: Change input type to password
        id="Idiputtext"
        className="w-3/5 border-solid border-2"
        onChange={(e) => {
          inputchange(e.target.value);
        }}
      />
    </div>
  );
};

export default LoginPassword;
