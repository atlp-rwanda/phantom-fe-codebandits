import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import sleep from '../../utils/sleep.js';

function ResetNewPassword() {
  const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
  let navigate = useNavigate();
  const [valid, setValid] = useState(false);
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange'
  });
  const password = useRef({});
  password.current = watch('password', '');
  const pass2 = useRef({});
  watch('password2', '');

  const onValid = (data) => {
    setloading(true);
    setValid(true);
    sleep(2000).then(() => {
      setloading(false);
      toast('Your new password has been created', {
        theme: 'colored',
        type: 'success'
      });

      navigate('/accounts/reset-success');
    });
  };
  const onErrors = (errors) => {
    setValid(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid, onErrors)}>
        <h3 className="text-2xl font-bold font-rale text-center py-4">
          New Password
        </h3>

        <div className="relative w-full">
          <label htmlFor="password" className="font-bold text-sm">
            Password <span className="text-red-500 font-bold">*</span>:{' '}
          </label>
          <input
            type="Password"
            ref={password}
            placeholder="New password"
            id="password"
            name="password"
            {...register('password', {
              required: 'New password required',
              pattern: {
                value: PASS_REGEX,
                message:
                  'Must have an uppercase, lowercase, number and be at least 6 chars'
              }
            })}
            required
            className={`w-full rounded-md placeholder:text-sm placeholder:font-light ${
              !errors?.password ? '' : ' border-gray-400 '
            } border-2 focus:outline-none px-2 py-1 font-bold ${
              !errors?.password ? ' border-green-500' : ' '
            } ${errors?.password ? 'border-red-500' : ''}`}
          />
          <div
            className={`text-xs py-1/2 text-red-500 ${
              errors?.password ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {(errors?.password && errors.password.message) || ''}
          </div>
        </div>
        <div className="relative w-full mb-2">
          <label htmlFor="password2" className="font-bold text-sm">
            Confirm password <span className="text-red-500 font-bold">*</span>:
          </label>
          <input
            type="password"
            id="password2"
            ref={pass2}
            name="password2"
            placeholder="Confirm password"
            required
            {...register('password2', {
              validate: (value) =>
                value === password.current || 'The passwords do not match'
            })}
            className={`w-full rounded-md placeholder:text-sm placeholder:font-light ${
              !errors?.password2 ? '' : 'border-gray-400'
            } border-2 focus:outline-none px-2 py-1 font-bold 
              ${!errors?.password2 ? 'border-green-500' : ''} ${
              errors?.password2 ? 'border-red-500' : ''
            }
              `}
          />
          <div
            className={`text-xs py-1/2 text-red-500 ${
              errors?.password2 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {(errors?.password2 && errors.password2.message) || ''}
          </div>
        </div>
        <button className="py-1 px-3 text-center bg-primary hover:bg-hover transition-all hover:transition-all uppercase text-white font-bold rounded-md">
          {loading ? 'SENDING...' : 'SUBMIT'}
        </button>
      </form>
    </>
  );
}

export default ResetNewPassword;
