import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Input = ({ name, placeholder, icon, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="capitalize mb-3 font-semibold">
        {name}
      </label>
      <input
        type={name}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="rounded-md mb-5 p-2 border-2 w-full"
      />
      <p className="text-red-500 hidden"></p>
    </div>
  );
};

export default Input;
