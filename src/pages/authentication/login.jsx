import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import FacebookLogo from '../../assets/facebook-logo.png';
import { BsApple } from 'react-icons/bs';
import WelcomePanel from '../../components/welcomePanel';
import AuthFooter from '../../components/authFooter';
import ThemeContext from '../../themeContext';

export default function Login() {

  const { theme } = useContext(ThemeContext)

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  useEffect(() => {
    if (!emailTouched) return;
    if (email === "") return setEmailError(true);
    const validation = emailRegex.test(email);
    if (!validation) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email]);

  useEffect(() => {
    if (!passwordTouched) return;
    if (password === "") return setPasswordError(true);
    setPasswordError(false);
  },[password])

  return (
    <div className={`${theme} max-w-screen min-h-screen lg:h-screen grid grid-rows-[auto_1fr] lg:grid-rows-none grid-cols-1 xl:grid-cols-[auto_1fr] lg:grid-cols-[1fr_1fr]`}>
      <WelcomePanel />
      <div className='bg-theme-100 h-full overflow-x-hidden overflow-y-auto flex justify-center lg:grid place-items-center pb-8 px-8'>
        <div className='w-full max-w-[600px] lg:w-[clamp(100%,400px,400px)]'>
          <h1 className='text-2xl text-theme-900 font-medium mb-2 text-center'>
            Sign in to Trackody
          </h1>
          <p className='font-medium mb-8 text-center text-theme-600'>
            New Here?{' '}
            <NavLink to={'/sign-up'} className='text-theme-blue-400 font-medium'>
              Create an Account
            </NavLink>
          </p>
          <form action='' method='post' className='grid gap-7'>
            {/* Email */}
            <div>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={email}
                required
                className={`form-control ${emailError && 'outline outline-red-500'}`}
                onChange={(e) => {
                  setEmailTouched(true);
                  const { value } = e.target;
                  setEmail(value);
                }}
              />
            </div>
            {/* Password */}
            <div className='grid grid-cols-2'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <NavLink
                to={'/forgot-password'}
                className='text-right text-sm text-theme-blue-400 hover:text-theme-blue-300 font-[500]'
              >
                Forgot Password?
              </NavLink>
              <input
                type='password'
                name='password'
                minLength={8}
                value={password}
                onChange={(e) => {
                  setPasswordTouched(true);
                  const { value } = e.target;
                  setPassword(value);
                }}
                required
                className={`form-control col-start-1 col-end-3 ${passwordError ? 'outline outline-red-500' : ''}`}
              />
              <div className='text-red-500 text-[0.8rem] mt-2'>
                {passwordError}
              </div>
            </div>
            <NavLink
              to={'/admin/'}
              type='submit'
              className='w-full rounded-lg bg-theme-blue-400 hover:bg-theme-blue-500 text-white font-medium text-center px-4 py-[0.6rem] transition-colors'
            >
              Continue
            </NavLink>
          </form>
          <span className='block text-theme-600 my-4 font-semibold text-[0.7rem] text-center'>
            OR
          </span>
          <div className='flex flex-col w-full gap-4'>
            <button className='bg-theme-400 text-theme-600 px-4 py-[0.65rem] rounded-lg flex items-center justify-center gap-[10px] transition-colors'>
              <FcGoogle className='text-2xl' />
              Continue with Google
            </button>
            <button className='bg-theme-400 text-theme-600 px-4 py-[0.65rem] rounded-lg flex items-center justify-center gap-[10px] transition-colors'>
              <img src={FacebookLogo} alt='logo' className='w-[24px]' />
              Continue with Facebook
            </button>
            <button className='bg-theme-400 text-theme-600 px-4 py-[0.65rem] rounded-lg flex items-center justify-center gap-[10px] transition-colors'>
              <BsApple className='text-2xl text-black' />
              Continue with Apple
            </button>
          </div>
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}