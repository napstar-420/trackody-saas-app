import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/SideNav';
import { links } from './navLinks';

export default function Root() {
  return (
    <div className='grid w-full h-screen grid-cols-[auto_1fr]'>
      <SideNav>{links}</SideNav>
      <Outlet />
    </div>
  );
}
