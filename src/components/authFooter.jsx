import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthFooter() {
  return (
    <div className='w-full flex justify-center gap-3 text-theme-600 mt-16 text-sm'>
      <NavLink to={'/about'} className='hover:text-theme-blue-400 transition-colors'>
        About
      </NavLink>
      <NavLink to={'/support'} className='hover:text-theme-blue-400 transition-colors'>
        Support
      </NavLink>
      <NavLink
        to={'/purchase'}
        className='hover:text-theme-blue-400 transition-colors'
      >
        Purchase
      </NavLink>
    </div>
  );
}
