import React, { useState } from 'react';
import PropType from 'prop-types';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import { QuickLinksBtn } from './quickLinks';
import { ThemeToggleBtn } from './themeToggle.jsx';
import { NotificationBtn } from './notification.jsx';
import { ProfileBtn } from './profileBtn.jsx';
import { NavLink, useOutletContext } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header({ children }) {
  const [opened, setOpened] = useState('');
  const [setIsNavOpen] = useOutletContext();

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='lg:hidden flex items-center gap-2'>
          <button
            onClick={() => setIsNavOpen(true)}
            className='text-xl text-light_600 dark:text-dark_300 dark:hover:text-primary hover:text-primary'
          >
            <GiHamburgerMenu />
          </button>
          <NavLink to={'/'} className='hidden sm:block text-2xl font-bold'>
            <span className='text-light_text dark:text-white'>Trac</span>
            <span className='text-secondary'>kody</span>
          </NavLink>
        </div>
        <div className='hidden lg:block'>{children}</div>
        <div className='flex gap-2 h-11 relative'>
          <QuickLinksBtn opened={opened} setOpened={setOpened} />
          <button className='p-2 text-2xl border rounded-xl text-zinc-300 dark:text-dark_300 dark:border-dark_300 hover:text-primary hover:border-primary dark:hover:text-primary dark:hover:border-primary transition-colors'>
            <HiChatBubbleBottomCenterText />
          </button>
          <ThemeToggleBtn opened={opened} setOpened={setOpened} />
          <NotificationBtn opened={opened} setOpened={setOpened} />
          <ProfileBtn opened={opened} setOpened={setOpened} />
        </div>
      </div>
      <div className='lg:hidden pt-3'>{children}</div>
    </>
  );
}

Header.propTypes = {
  children: PropType.element,
};
