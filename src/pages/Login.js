import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import busMapImg from '../assets/busMap.png';
import { Sleep } from '../components/utils/Sleep.js';
import usersDB from '../database/usersDB.json';
import { loginUser } from '../redux/reducers/authReducer.js';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [err, setErr] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(false);
  let { from } = location?.state || { from: { pathname: '/dashboard/main' } };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onValid = (data) => {
    setLoading(true);

    Sleep(3000).then(() => {
      const user = usersDB.filter((entry) => {
        return entry.email === data.email;
      });
      if (user.length === 0) {
        setLoading(false);
        return toast('Invalid credentials', { type: 'warning' });
      }

      dispatch(loginUser(user[0]));
      toast(user.name, { type: 'success' });
      setLoading(false);
      navigate(from.pathname);
    });
  };

  const onErrors = (errors) => {
    if (errors.password && !errors.email) {
      setAttempts(attempts + 1);
    }
  };
  useEffect(() => {
    if (attempts > 3 && attempts < 5) {
      setErr('Wrong attempts of more than 3 times.');
    } else if (attempts > 5) {
      setErr('Try again in 5 minutes');
    }
  }, [attempts]);

  return (
    <div className=" z-0 h-full">
      <main className="min-h-[80vh] flex flex-col  md:flex-row items-center w-full justify-center shadow-md relative h-full pb-52 md:pb-1 md:pt-1 pt-10">
        <section className="max-w-sm mt-[-60px] md:flex md:items-center md:justify-center md:mx-auto xl:ml-64">
          <img
            src={busMapImg}
            alt="vector image of a bus on map"
            className="w-full object-cover "
          />
        </section>
        <section className="flex flex-col  py-3 px-4 w-72 md:w-fit md:min-w-[300px] shadow-main absolute bg-white top-28 md:top-0 md:mx-auto md:relative rounded-lg xl:mr-64">
          <form
            id="loginForm"
            className="flex flex-col w-full px-4"
            onSubmit={handleSubmit(onValid, onErrors)}
          >
            <h2 className="text-2xl mb-5 text-center font-extrabold">Login</h2>
            <p className="font-bold text-sm font-raleway">
              {from.pathname === '/dashboard/main'
                ? ''
                : `Login required to access ${from.pathname}`}
            </p>
            <p className="font-bold text-sm py-1">{err}</p>
            <label
              htmlFor="email"
              className="capitalize mb-1.5 font-semibold text-sm required"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Enter a valid email'
                }
              })}
              className="rounded-md mb-1 p-1 border-2 w-full outline-none focus:border-gray-500"
            />
            <p id="email-errors" className="text-red-600 text-sm pb-3">
              {errors?.email && errors.email.message}
            </p>
            <label
              htmlFor="email"
              className="capitalize mb-2 font-semibold required"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              {...register('password', { required: 'Password is required' })}
              className="rounded-md mb-2 p-1 border-2 w-full outline-none focus:border-gray-500"
            />
            <p className="text-red-600 text-sm">
              {errors?.password && errors.password.message}
            </p>
            <Link to="/accounts/reset-password">
              <h4 className="text-primary text-right mb-5 text-sm font-bold">
                Forgot password?
              </h4>
            </Link>

            {attempts > 5 ? (
              <button
                disabled
                className="bg-red-500 px-5 py-2 rounded-md text-white w-fit mx-auto hover:bg-red-900 transition-all hover:transition-all"
              >
                Unlock in 5 minutes
              </button>
            ) : (
              <button className="bg-primary px-5 py-2 rounded-md text-white w-fit mx-auto hover:bg-hover transition-all hover:transition-all">
                {!loading ? 'Login' : 'Sending...'}
              </button>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
