import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import FacebookLogo from '../assets/facebook-logo.png';
import { BsApple } from 'react-icons/bs';
import WelcomePanel from '../components/welcomePanel';

export default function Login() {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  useEffect(() => {
    if (!emailTouched) return;
    if (email === "") return setEmailError('Email Address is required');
    const validation = emailRegex.test(email);
    if (!validation) {
      setEmailError('The value is not a valid email address');
    } else {
      setEmailError('');
    }
  }, [email]);

  useEffect(() => {
    if (!passwordTouched) return;
    if (password === "") return setPasswordError('Password is required');
    setPasswordError('');
  },[password])

  return (
    <div className='max-w-screen min-h-screen lg:h-screen grid grid-rows-[auto_1fr] lg:grid-rows-none grid-cols-1 xl:grid-cols-[auto_1fr] lg:grid-cols-[1fr_1fr]'>
      <WelcomePanel />
      <div className='bg-dark h-full overflow-x-hidden overflow-y-auto flex justify-center lg:grid place-items-center pt-10 lg:pt-20 pb-8 px-8'>
        <div className='w-full max-w-[600px] lg:w-[clamp(100%,400px,400px)]'>
          <h1 className='text-white text-2xl font-medium mb-2 text-center'>
            Sign in to Trackody
          </h1>
          <p className='font-secondary text-gray-600 font-medium mb-8 text-center'>
            New Here?{' '}
            <NavLink to={'/sign-up'} className='text-primary font-semibold'>
              Create an Account
            </NavLink>
          </p>
          <form action='' method='post' className='grid gap-8'>
            {/* Email */}
            <div>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => {
                  setEmailTouched(true);
                  const { value } = e.target;
                  setEmail(value);
                }}
                required
                className='form-control'
              />
              <div className='text-red-500 text-[0.8rem] mt-2'>
                {emailError}
              </div>
            </div>
            {/* Password */}
            <div className='grid grid-cols-2'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <NavLink
                to={'/forgot-password'}
                className='text-right text-primary hover:text-primary_lighten font-[500]'
              >
                Forgot Password?
              </NavLink>
              <input
                type='password'
                name='assword'
                value={password}
                onChange={(e) => {
                  setPasswordTouched(true);
                  const { value } = e.target;
                  setPassword(value);
                }}
                required
                className='form-control col-start-1 col-end-3'
              />
              <div className='text-red-500 text-[0.8rem] mt-2'>
                {passwordError}
              </div>
            </div>
            <button
              type='submit'
              className='w-full rounded-lg bg-primary hover:bg-primary_darken text-white  font-medium text-center px-4 py-3 transition-colors'
            >
              Continue
            </button>
          </form>
          <span className='block my-4 text-[#60606d]  font-semibold text-[0.8rem] text-center'>
            OR
          </span>
          <div className='flex flex-col w-full gap-4'>
            <button className='bg-[#2b2b40] px-4 py-[0.65rem] rounded-lg text-[#79798f] flex items-center justify-center gap-[10px] hover:bg-[#383852] transition-colors'>
              <FcGoogle className='text-2xl' />
              Continue with Google
            </button>
            <button className='bg-[#2b2b40] px-4 py-[0.65rem] rounded-lg text-[#79798f] flex items-center justify-center gap-[10px] hover:bg-[#383852] transition-colors'>
              <img src={FacebookLogo} alt='logo' className='w-[24px]' />
              Continue with Facebook
            </button>
            <button className='bg-[#2b2b40] px-4 py-[0.65rem] rounded-lg text-[#79798f] flex items-center justify-center gap-[10px] hover:bg-[#383852] transition-colors'>
              <BsApple className='text-2xl text-black' />
              Continue with Apple
            </button>
          </div>
          <div className='w-full flex justify-center gap-3 text-[#57576e] mt-16 text-sm'>
            <NavLink
              to={'/about'}
              className='hover:text-primary transition-colors'
            >
              About
            </NavLink>
            <NavLink
              to={'/support'}
              className='hover:text-primary transition-colors'
            >
              Support
            </NavLink>
            <NavLink
              to={'/purchase'}
              className='hover:text-primary transition-colors'
            >
              Purchase
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}