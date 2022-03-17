import React from 'react';

const LanguageButton = () => {
  return (
    <div>
      <select className="bg-background border outline-none md:ml-6 lg:ml-6 xl:ml-6 mt-5 flex py-2 px-4 text-sm hover:font-bold">
        <option className=" border-none bg-background w-full cursor-pointer">
          English
        </option>
        <option className=" border-none bg-background w-full cursor-pointer">
          French
        </option>
        <option className=" border-none bg-background cursor-pointer">
          Kinyarwanda
        </option>
      </select>
    </div>
  );
};

export default LanguageButton;
