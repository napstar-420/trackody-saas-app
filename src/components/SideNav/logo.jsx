import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink to={'/'} className='text-2xl font-bold'>
      <span className='text-light_text dark:text-white'>Trac</span>
      <span className='text-secondary'>kody</span>
    </NavLink>
  );
}
