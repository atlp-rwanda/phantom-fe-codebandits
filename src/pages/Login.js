import React from 'react';
import busMapImg from '../assets/busMap.png';
const Login = () => {
  return (
    <div className="font-rale flex flex-col">
      <header className="w-full h-12 flex  items-center shadow-sm">
        <h2 className="font-bold text-primary text-center">Phanthom nav bar</h2>
      </header>
      <section className="flex w-fit items-center justify-center p-4 m-10 shadow-md">
        <div className="w-1/2">
          <img
            src={busMapImg}
            alt="Vector image of bus on map"
            className="object-cover w-fit hidden sm:block"
          />
        </div>
        <form className="flex flex-col  p-10 self-center sm:shadow-md">
          <h2 className="text-3xl mb-10 text-center">Login</h2>
          <input
            type="email"
            d
            placeholder="Email"
            className="rounded-md mb-5 p-1 border-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-md mb-2 p-1 border-2 w-fit"
          />
          <h4 className="text-primary text-right">forgot password?</h4>
          <button
            className="bg-primary px-3 py-1 rounded-md text-white w-fit mx-auto hover:bg-hover transition-all "
            type="submit"
          >
            Login
          </button>
        </form>
      </section>
      <footer className="w-full h-12 flex  items-center shadow-sm">
        <h2 className="font-bold text-primary text-center">Phanthom Footer</h2>
      </footer>
    </div>
  );
};

export default Login;
