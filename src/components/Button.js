import React from 'react';

const Button = ({ name, styles }) => {
  return (
    <div>
      <button
        type="button"
        className={`${styles} rounded-xl py-3 text-base md:text-sm lg:text-lg xl:text-lg px-5`}
      >
        {name}
      </button>
    </div>
  );
};

export function ButtonA({ name, onClick, styles, type }) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`${styles} bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl m-2 `}
      >
        {name}
      </button>
    </div>
  );
}



export default Button;
