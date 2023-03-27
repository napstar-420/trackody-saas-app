import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { IoCheckbox } from 'react-icons/io5';
import WelcomePanel from '../components/welcomePanel';

export default function SignUp() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [passwordPower, setPasswordPower] = useState(0);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [error, setError] = useState({
    fname: '',
    lname: '',
    email: '',
    cPassword: '',
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
      setError({ ...error, fname: '' });
      return;
    }
    setError({ ...error, fname: 'First name is required' });
  }, [fname]);

  // Last name Effect
  useEffect(() => {
    if (!touched.lname) return;
    if (lname !== '') {
      setError({ ...error, lname: '' });
      return;
    }
    setError({ ...error, lname: 'Last name is required' });
  }, [lname]);

  // Email Effect
  useEffect(() => {
    if (!touched.email) return;
    if (email === '')
      return setError({ ...error, email: 'Email Address is required' });
    const validation = emailRegex.test(email);
    if (!validation) {
      setError({ ...error, email: 'The value is not a valid email address' });
    } else {
      setError({ ...error, email: '' });
    }
  }, [email]);

  // Password Effect
  useEffect(() => {
    let power = 0;
    if (/.{8,}/.test(password)) {
      power++;
      if (/.*\d.*/.test(password)) power++;
      if (/.*[\W_].*/.test(password)) power++;
      if (/.*[A-Z].*/.test(password) && /.*[a-z].*/.test(password)) power++;
    }
    setPasswordPower(power);
    if (password === cPassword) {
      setError({ ...error, cPassword: '' });
    }
  }, [password]);

  // SetPassword Effect
  useEffect(() => {
    if (!touched.cPassword) return;
    if (cPassword !== '') {
      if (cPassword !== password) {
        setError({ ...error, cPassword: "Passwords don't match" });
        return;
      }
      setError({ ...error, cPassword: '' });
      return;
    }
    setError({ ...error, cPassword: 'Password confirmation is required' });
  }, [cPassword]);

  return (
    <div className='max-w-screen min-h-screen lg:h-screen grid grid-rows-[auto_1fr] lg:grid-rows-none grid-cols-1 xl:grid-cols-[auto_1fr] lg:grid-cols-[1fr_1fr]'>
      <WelcomePanel />

      <div className='bg-dark h-full overflow-x-hidden overflow-y-auto flex justify-center lg:grid place-items-center pt-10 lg:pt-20 pb-8'>
        <div className='px-8'>
          <h1 className='text-white text-2xl font-medium mb-2 text-center'>
            Create an Account
          </h1>
          <p className='font-secondary text-dark_text font-medium mb-8 text-center'>
            Already have an account?{' '}
            <NavLink to={'/'} className='text-primary font-semibold'>
              Sign in here
            </NavLink>
          </p>
          <button className='bg-[#2d3749] text-[0.82rem] font-[500] w-full px-4 py-[0.65rem] rounded-lg text-primary flex items-center justify-center gap-[10px] hover:text-white hover:bg-primary transition-colors'>
            <FcGoogle className='text-2xl' />
            Sign in with Google
          </button>
          <div className='my-8 flex items-center gap-2'>
            <div className='grow bg-[#2b2b40] h-[2px]'></div>
            <div className='text-dark_text text-sm'>OR</div>
            <div className='grow bg-dark_bg h-[2px]'></div>
          </div>
          <form
            action=''
            method='post'
            className='max-w-[600px] lg:max-w-[500px] flex flex-col gap-8'
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
                  className='form-control'
                />
                <div className='text-red-500 text-[0.8rem] mt-2'>
                  {error.fname}
                </div>
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
                  className='form-control'
                />
                <div className='text-red-500 text-[0.8rem] mt-2'>
                  {error.lname}
                </div>
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
                className='form-control'
              />
              <div className='text-red-500 text-[0.8rem] mt-2'>
                {error.email}
              </div>
            </div>
            <div className=''>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='form-control'
              />
              <div className='flex mt-3 mb-3 gap-1'>
                {Range(4).map((_, i) => {
                  const index = i + 1;
                  return (
                    <div
                      className={`h-[6px] grow rounded-lg ${
                        passwordPower < index ? 'bg-dark_bg' : 'bg-lime-400'
                      }`}
                      key={i}
                    ></div>
                  );
                })}
              </div>
              <p className='text-dark_text text-sm'>
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
                className='form-control'
              />
              <div className='text-red-500 text-[0.8rem] mt-2'>
                {error.cPassword}
              </div>
              <div className='flex w-max flex-row-reverse items-start mt-4'>
                <label
                  htmlFor='t_and_c'
                  className='text-dark_text relative top-[2px]'
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
                    <div className='absolute top-0 left-0 w-full h-full bg-dark_bg rounded' />
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
              <div className='text-red-500 text-[0.8rem] mt-2'>
                {isTermsChecked
                  ? ''
                  : touched.terms ? 'You must accept the terms and conditions' : ''}
              </div>
            </div>
              <button className='px-6 py-3 bg-primary hover:bg-primary_darken text-white font-medium rounded-lg m-auto transition-colors'>
                Submit
              </button>
          </form>
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
