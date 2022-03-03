import React from 'react';

const LoginSkeleton = () => {
  return (
    <main className="flex flex-col  md:flex-row items-center  justify-center relative h-full">
      <section className='max-w-sm md:flex md:items-center md:justify-center md:mx-auto'>
        <div className="bg-gray-200 w-72 h-52 rounded-md"></div>
      </section>

      <section className='hidden md:flex flex-col  py-3 px-4 w-72 md:w-fit md:min-w-[300px] absolute  md:top-0 md:mx-auto md:relative rounded-lg'>
        <section className="flex flex-col  w-full">
          <div className="bg-gray-100 w-44 h-6 mb-5"></div>
          <div className="bg-gray-100 w-60 h-8 mb-7"></div>
          <div className="bg-gray-100 w-60 h-8 mb-7"></div>
          <div className="bg-gray-100 w-20 h-8 rounded-md mb-7"></div>
        </section>
      </section>
    </main>
  );
};

export default LoginSkeleton;
