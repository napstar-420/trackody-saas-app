import React from 'react';
import LoginSvg from '../assets/login.svg';

export default function WelcomePanel() {
  return (
    <div
        id='login_left_side'
        className='bg-primary w-full lg:grid place-items-center xl:w-[600px] overflow-y-auto overflow-x-hidden'
      >
        <div className='py-6 sm:py-10 lg:px-16 lg:py-16 text-center lg:mt-10'>
          <h1 className='font-secondary text-4xl font-bold'>
            <span className='font-[inherit] text-secondary'>Trac</span>
            <span className='font-[inherit] text-[#333]'>kody</span>
          </h1>
          <h2 className='hidden lg:block mt-7 mb-10 text-4xl text-white font-bold'>
            Welcome to Trackody
          </h2>
          <p className='hidden lg:block text-white text-xl font-opensSans font-bold'>
            The best tracking platform for marketing whales to view performance
            of campaigns.
          </p>
        </div>
        <div className='hidden lg:flex pt-16 items-center justify-center'>
          <img src={LoginSvg} alt='login illustration' width='300' />
        </div>
      </div>
  )
}