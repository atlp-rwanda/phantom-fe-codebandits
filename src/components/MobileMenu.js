import React from 'react';
import Button from './Button.js';
import LanguageButton from './LanguageButton.js';

const MobileMenu = ({ styles }) => {
  return (
    <div
      className={`${styles} flex flex-col font-raleway md:hidden lg:hidden xl:hidden border px-4 py-2 mr-6`}
    >
      <Button
        name="For operators"
        styles="bg-primary hover:bg-hover text-white rounded-xl mt-2 px-3 py-2"
      />
      <Button
        name="Track Bus"
        styles="border border-primary bg-background hover:bg-hover2 text-primary rounded-xl mt-2 px-6 py-2"
      />
      <LanguageButton className="mt-2" />
    </div>
  );
};

export default MobileMenu;
