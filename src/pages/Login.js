import React from 'react';
import busMapImg from '../assets/busMap.png';
const Login = () => {
  return (
    <div className="font-rale flex  min-h-screen justify-center">
      <div className="flex w-fit mx-auto m-4">
        <header>
          <h1>Phanthom</h1>
        </header>
        <div className="w-1/2 m-0">
          <img src={busMapImg} alt="" className="object-cover h-full w-full" />
        </div>
        <form className="flex flex-col p-10 self-center shadow-lg">
          <h1 className="mb-10 text-center">Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="rounded-md mb-5 p-1 border-2 w-fit"
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-md mb-5 p-1 border-2 w-fit"
          />
          <button
            className="bg-primary px-3 py-1 rounded-md text-white w-fit mx-auto hover:bg-hover transition-all "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
