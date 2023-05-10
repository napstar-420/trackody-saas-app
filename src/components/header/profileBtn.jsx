import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export function ProfileBtn({ opened, setOpened }) {
  return (
    <>
      <div
        onMouseEnter={() => setOpened('PROFILE')}
        onMouseLeave={() => setOpened('')}
        className='flex gap-2 items-center cursor-pointer'
      >
        <div
          className='w-10 h-10 rounded-lg bg-cover bg-center'
          style={{
            backgroundImage:
              'url(https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg)',
          }}
        ></div>
        <div className='hidden md:block'>
          <NavLink
            to={'/admin/profile'}
            className='text-light_text dark:text-white dark:hover:text-primary hover:text-primary'
          >
            Kristen Stewart
          </NavLink>
          <p className='text-sm text-slate-500 dark:text-dark_200'>Actress</p>
        </div>
      </div>
      <ProfileOverview opened={opened} setOpened={setOpened} />
    </>
  );
}

ProfileBtn.propTypes = {
  opened: PropTypes.string,
  setOpened: PropTypes.func,
};

function ProfileOverview({ opened, setOpened }) {
  return (
    <AnimatePresence>
      {opened === 'PROFILE' && (
        <motion.div
          onMouseEnter={() => setOpened('PROFILE')}
          onMouseLeave={() => setOpened('')}
          className='w-72 bg-white absolute z-10 top-12 right-0 shadow-2xl rounded-2xl'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transitionTimingFunction: 'ease' }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className='grid grid-cols-[auto_1fr] gap-3 items-center p-6 border-b'>
            <div
              className='w-12 h-12 rounded-lg bg-cover bg-center'
              style={{
                backgroundImage:
                  'url(https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg)',
              }}
            />
            <div>
              <h1 className='inline-block text-light_text font-semibold'>
                Kristen Stewart
              </h1>
              <span className='text-[0.65rem] ml-3 bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-lg'>
                Admin
              </span>
              <p className='text-sm text-light_600'>kitty@plotano.pk</p>
            </div>
          </div>
          <div className='px-4 py-2 grid gap-1 border-b'>
            <NavLink
              to={'#'}
              className='hover:bg-slate-300 hover:bg-opacity-20 hover:text-primary px-4 py-2 rounded-xl inline-block w-full transition-colors'
            >
              My Profile
            </NavLink>
            <NavLink
              to={'#'}
              className='hover:bg-slate-300 hover:bg-opacity-20 hover:text-primary px-4 py-2 rounded-xl inline-block w-full transition-colors'
            >
              My Projects
            </NavLink>
            <NavLink
              to={'#'}
              className='hover:bg-slate-300 hover:bg-opacity-20 hover:text-primary px-4 py-2 rounded-xl inline-block w-full transition-colors'
            >
              My Subscriptions
            </NavLink>
            <NavLink
              to={'#'}
              className='hover:bg-slate-300 hover:bg-opacity-20 hover:text-primary px-4 py-2 rounded-xl inline-block w-full transition-colors'
            >
              My Statements
            </NavLink>
          </div>
          <div className='px-4 py-2 grid gap-1'>
            <NavLink
              to={'#'}
              className='hover:bg-slate-300 hover:bg-opacity-20 hover:text-primary px-4 py-2 rounded-xl inline-block w-full transition-colors'
            >
              Language
            </NavLink>
            <NavLink
              to={'#'}
              className='hover:bg-slate-300 hover:bg-opacity-20 hover:text-primary px-4 py-2 rounded-xl inline-block w-full transition-colors'
            >
              Account Setting
            </NavLink>
            <NavLink
              to={'#'}
              className='hover:bg-slate-300 hover:bg-opacity-20 hover:text-primary px-4 py-2 rounded-xl inline-block w-full transition-colors'
            >
              Sign out
            </NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ProfileOverview.propTypes = {
  opened: PropTypes.string,
  setOpened: PropTypes.func,
};
