import React from 'react'
import DropDown from './dropDown';
import Logo from './logo';

export default function NavHeader() {
  return (
    <div className='px-6 py-8 border-b border-dashed flex justify-between'>
      <Logo />
      <DropDown />
    </div>
  );
}
