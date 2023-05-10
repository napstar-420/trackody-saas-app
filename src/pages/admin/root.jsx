import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../components/SideNav';
import { links } from './navLinks';
import ThemeContext from '../../themeContext';

export default function Root() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} grid md:grid-cols-[auto_1fr] w-full h-screen`}>
      <SideNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}>
        {links}
      </SideNav>
      <Outlet context={[setIsNavOpen]} />
    </div>
  );
}
