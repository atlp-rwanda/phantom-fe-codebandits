import React, { forwardRef } from 'react';

const Input = forwardRef(
  (
    {
      type,
      placeholder,
      styles,
      onChange,
      name,
      htmlFor,
      labelName,
      defaultValue,
      wrapperStyles,
      id,
      disabled
    },
    ref
  ) => {
    return (
      <div className={`${wrapperStyles} mb-2 block font-raleway`}>
        <label
          htmlFor={htmlFor}
          className="block text-grey-darker text-sm font-bold font-rale mb-2"
        >
          {labelName}
        </label>
        <input
          className={`${styles} appearance-none border font-rale rounded w-full py-2 px-3 text-grey-darker bg-gray-200 text-md outline-hidden`}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          name={name}
          ref={ref}
          id={id}
        />
      </div>
    );
  }
);


export default Input;
