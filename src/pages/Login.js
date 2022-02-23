import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import busMapImg from '../assets/busMap.png';
import Input from '../components/Input.js';
import { Header } from '../components/Dummy.js';
import { Footer } from '../components/Dummy.js';

const Login = () => {
  return (
    <div>
      <Header />
      <main className="grid grid-cols-2 items-center w-full justify-center shadow-md">
        <section>
          <img
            src={busMapImg}
            alt="vector image of a bus on map"
            className="w-full object-cover"
          />
        </section>
        <section className="">
          <h2 className="text-3xl mb-10 text-center">Login</h2>
          <form className="flex flex-col  p-10 self-center sm:shadow-md">
            <Input name="email" placeholder="Enter email" />
            <Input name="password" placeholder="Enter password" />
            <h4 className="text-primary text-right">forgot password?</h4>
            <button className="bg-primary px-3 py-1 rounded-md text-white w-fit mx-auto hover:bg-hover transition-all ">
              Login
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
