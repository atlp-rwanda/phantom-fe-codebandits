import React from 'react';

const Burger = ({ styles }) => {
  return (
    <div>
      <div className={`${styles} h-1 w-7 bg-primary mt-1`} />
      <div className={`${styles} h-1 w-7 bg-primary mt-1`} />
      <div className={`${styles} h-1 w-7 bg-primary mt-1`} />
    </div>
  );
};

export default Burger;
