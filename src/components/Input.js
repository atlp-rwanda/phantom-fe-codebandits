import React from 'react';

function Input({ type, placeholder, styles, onChange, name, htmlFor, labelName}) {
  return (
    <div className="mb-2 block font-raleway">
      <label htmlFor={htmlFor} className="block text-grey-darker text-sm font-bold mb-2">{labelName}</label>
      <input
        className={`${styles} appearance-none border rounded w-full py-2 px-3 text-grey-darker bg-gray-200`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}


export default Input;

