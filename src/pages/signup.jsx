import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { IoCheckbox } from 'react-icons/io5';
import WelcomePanel from '../components/welcomePanel';
import AuthFooter from '../components/authFooter';
import ThemeContext from '../themeContext';

export default function SignUp() {
  const { theme } = useContext(ThemeContext);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/;
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [passwordPower, setPasswordPower] = useState(0);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [error, setError] = useState({
    fname: false,
    lname: false,
    email: false,
    password: false,
    cPassword: false,
  });
  const [touched, setTouched] = useState({
    fname: false,
    lname: false,
    email: false,
    cPassword: false,
    terms: false,
  });

  // First name Effect
  useEffect(() => {
    if (!touched.fname) return;
    if (fname !== '') {
      setError({ ...error, fname: false });
      return;
    }
    setError({ ...error, fname: true });
  }, [fname]);

  // Last name Effect
  useEffect(() => {
    if (!touched.lname) return;
    if (lname !== '') {
      setError({ ...error, lname: false });
      return;
    }
    setError({ ...error, lname: true });
  }, [lname]);

  // Email Effect
  useEffect(() => {
    if (!touched.email) return;
    if (email === '' || !emailRegex.test(email)) {
      setError({ ...error, email: true });
      return;
    }
    setError({ ...error, email: false });
  }, [email]);

  // Password Effect
  useEffect(() => {
    let power = 0;
    if (/.{8,}/.test(password)) {
      setError({...error, password: false});
      power++;
      if (/.*\d.*/.test(password)) power++;
      if (/.*[\W_].*/.test(password)) power++;
      if (/.*[A-Z].*/.test(password) && /.*[a-z].*/.test(password)) power++;
    }
    setPasswordPower(power);
    if (power === 0) setError({...error, password: true})
    if (password === cPassword) {
      setError({ ...error, cPassword: '' });
    }
  }, [password]);

  // SetPassword Effect
  useEffect(() => {
    if (!touched.cPassword) return;
    if (cPassword === '' || cPassword !== password) {
      setError({ ...error, cPassword: true });
      return;
    }
    setError({ ...error, cPassword: false });
  }, [cPassword]);

  return (
    <div className={`${theme} max-w-screen min-h-screen lg:h-screen grid grid-rows-[auto_1fr] lg:grid-rows-none grid-cols-1 xl:grid-cols-[auto_1fr] lg:grid-cols-[1fr_1fr]`}>
      <WelcomePanel />
      <div className='bg-white dark:bg-dark_600 h-full overflow-x-hidden overflow-y-auto flex justify-center lg:grid place-items-center pt-10 lg:pt-20 pb-8'>
        <div className='px-8'>
          <h1 className='text-light_text dark:text-white text-2xl font-medium mb-2 text-center'>
            Create an Account
          </h1>
          <p className='text-light_600 dark:text-dark_300 font-medium mb-8 text-center'>
            Already have an account?{' '}
            <NavLink to={'/'} className='text-primary font-semibold'>
              Sign in here
            </NavLink>
          </p>
          <button className='bg-primary bg-opacity-20 text-[0.82rem] font-[500] w-full px-4 py-[0.65rem] rounded-lg text-primary flex items-center justify-center gap-[10px] hover:text-white hover:bg-primary transition-colors'>
            <FcGoogle className='text-2xl' />
            Sign in with Google
          </button>
          <div className='my-8 flex items-center gap-2'>
            <div className='grow bg-light_600 dark:bg-dark_400 h-[0.5px]'></div>
            <div className='text-light_600 dark:text-dark_400 text-sm'>OR</div>
            <div className='grow bg-light_600 dark:bg-dark_400 h-[0.5px]'></div>
          </div>
          <form
            action=''
            method='post'
            className='max-w-[600px] lg:max-w-[500px] flex flex-col gap-7'
          >
            <div className='grid grid-cols-2 gap-4'>
              <div className=''>
                <label htmlFor='first_name' className='form-label'>
                  First Name
                </label>
                <input
                  type='text'
                  name='first_name'
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                    setTouched({ ...touched, fname: true });
                  }}
                  required
                  className={`form-control ${error.fname ? 'outline outline-red-500' : ''}`}
                />
              </div>
              <div className=''>
                <label htmlFor='last_name' className='form-label'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='last_name'
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                    setTouched({ ...touched, lname: true });
                  }}
                  required
                  className={`form-control ${error.lname ? 'outline outline-red-500' : ''}`}
                />
              </div>
            </div>
            <div className=''>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setTouched({ ...touched, email: true });
                }}
                required
                className={`form-control ${error.email ? 'outline outline-red-500' : ''}`}
              />
            </div>
            <div className=''>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                name='password'
                value={password}
                required
                minLength={8}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control ${error.password ? 'outline outline-red-500' : ''}`}
              />
              <div className='flex mt-3 mb-3 gap-1'>
                {Range(4).map((_, i) => {
                  const index = i + 1;
                  return (
                    <div
                      className={`h-[5px] grow rounded-lg ${
                        passwordPower < index ? 'bg-light_500 dark:bg-dark_300' : 'bg-lime-400'
                      }`}
                      key={i}
                    ></div>
                  );
                })}
              </div>
              <p className='text-light_600 dark:text-dark_300 text-sm'>
                Use 8 or more characters with a mix of letters, numbers &
                symbols.
              </p>
            </div>
            <div className='w-full'>
              <label htmlFor='c_password' className='form-label'>
                Confirm Password
              </label>
              <input
                type='password'
                name='c_password'
                value={cPassword}
                onChange={(e) => {
                  setCPassword(e.target.value);
                  setTouched({ ...touched, cPassword: true });
                }}
                required
                className={`form-control ${error.cPassword ? 'outline outline-red-500' : ''}`}
              />
              <div className='flex w-max flex-row-reverse items-start mt-4'>
                <label
                  htmlFor='t_and_c'
                  className='text-light_800 dark:text-dark_200 relative top-[1px]'
                >
                  I Agree&nbsp;
                  <NavLink
                    to={'/terms-and-conditions'}
                    className='text-primary'
                  >
                    Terms and Conditions
                  </NavLink>
                </label>
                <div className='mr-2 w-6 h-6 relative'>
                  {isTermsChecked ? (
                    <IoCheckbox className='absolute top-0 left-0 text-primary text-2xl' />
                  ) : (
                    <div className='absolute top-0 left-0 w-full h-full bg-light_400 dark:bg-dark_300 rounded' />
                  )}
                  <input
                    type='checkbox'
                    name='t_and_c'
                    className='w-full h-full opacity-0'
                    required
                    onChange={(e) => {
                      setTouched({...touched, terms: true})
                      setIsTermsChecked(e.target.checked);
                    }}
                  />
                </div>
              </div>
            </div>
              <button className='px-6 py-3 bg-primary hover:bg-primary_darken text-white font-medium rounded-lg m-auto transition-colors'>
                Submit
              </button>
          </form>
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}

function Range(n) {
  if (n === 0 || n < 0) {
    throw new Error('Value should be greater than zero');
  }
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push('');
  }
  return arr;
}
