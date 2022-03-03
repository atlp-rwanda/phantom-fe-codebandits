import React from 'react';

const Input = ({ name, placeholder }) => {
  return (
    <>
      <label htmlFor={name} className="capitalize mb-2 font-semibold">
        {name}
      </label>
      <input
        type={name}
        id={name}
        name={name}
        placeholder={placeholder}
        className="rounded-md mb-2 p-2 border-2 w-full"
      />
    </>
  );
};

export default Input;
