import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/SideNav';
import { links } from './navLinks';

export default function Root() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <div className='grid md:grid-cols-[auto_1fr] w-full h-screen'>
      <SideNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}>
        {links}
      </SideNav>
      <Outlet context={[setIsNavOpen]} />
    </div>
  );
}
