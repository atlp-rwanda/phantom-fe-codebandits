import React from 'react';

function Label({name, htmlFor}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-grey-darker text-sm font-bold mb-2">{name}</label>
    </div>
  );
}

export default Label;
