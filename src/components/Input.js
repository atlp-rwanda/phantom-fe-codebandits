import React from 'react';

function Input({ placeholder, value, onChange, type, styles }) {
  return (
    <div>
      <input type={type} value={value} placeholder={placeholder} onChange={onChange} className={`${styles}`}/>
    </div>
  );
}

export default Input;
