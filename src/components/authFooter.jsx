import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthFooter() {
  return (
    <div className='w-full flex justify-center gap-3 text-light_800 dark:text-dark_300 mt-16 text-sm'>
      <NavLink to={'/about'} className='hover:text-primary transition-colors'>
        About
      </NavLink>
      <NavLink to={'/support'} className='hover:text-primary transition-colors'>
        Support
      </NavLink>
      <NavLink
        to={'/purchase'}
        className='hover:text-primary transition-colors'
      >
        Purchase
      </NavLink>
    </div>
  );
}
