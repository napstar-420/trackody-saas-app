import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/SideNav';
import { links } from './navLinks';

export default function Root() {
  return (
    <div className='grid md:grid-cols-[auto_1fr] w-full h-screen'>
      <SideNav>{links}</SideNav>
      <Outlet />
    </div>
  );
}
