import React from 'react';

const LanguageButton = () => {
  return (
    <div>
      <select className=" md:mt-8 bg-background border outline-none md:ml-6 lg:ml-6 xl:ml-6 lg:mt-8 xl:mt-8 flex py-2 px-4 text-lg hover:font-bold">
        <option className=" border-none bg-background w-full cursor-pointer hover:font-bold">
          English
        </option>
        <option className=" border-none bg-background w-full cursor-pointer hover:font-bold">
          French
        </option>
        <option className=" border-none bg-background cursor-pointer hover:font-bold">
          Kinyarwanda
        </option>
      </select>
    </div>
  );
};

export default LanguageButton;
