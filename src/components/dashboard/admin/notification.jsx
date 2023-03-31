import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { BsArrowRightShort } from 'react-icons/bs';

export function NotificationBtn({ opened, setOpened }) {
  return (
    <>
      <button
        onClick={() => setOpened(opened === 'NT' ? '' : 'NT')}
        className='px-[14px] py-1 text-2xl text-white bg-primary hover:bg-primary_darken rounded-xl transition-colors'
      >
        3
      </button>
      <NotificationTab opened={opened} />
    </>
  );
}

NotificationBtn.propTypes = {
  opened: PropTypes.string,
  setOpened: PropTypes.func,
};

function NotificationTab({ opened }) {
  return (
    <AnimatePresence>
      {opened === 'NT' && (
        <motion.div
          className='absolute w-80 top-12 transition-all bg-white rounded-xl overflow-hidden shadow-2xl'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transitionTimingFunction: 'ease' }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className='bg-gradient-to-r from-primary_darken to-primary text-left pt-8 pb-3 px-8'>
            <h2 className='text-white text-lg font-medium'>
              Notifications
              <span className='text-[0.7rem] ml-2 text-white opacity-80 px-2 py-1 rounded-lg'>
                24 reports
              </span>
            </h2>
            <div className='mt-3 flex gap-5 text-sm text-white'>
              <button className='opacity-80'>Alerts</button>
              <button className='opacity-80'>Updates</button>
              <button className='opacity-80'>Log</button>
            </div>
          </div>
          <div className='text-center py-32'>
            <h1 className='text-light_600'>No notifications</h1>
          </div>
          <div className=''></div>
          <div className='border-t py-4 text-center'>
            <button className='m-auto text-gray-500 hover:text-primary transition-colors flex items-center gap-2 text-sm '>
              View all
              <BsArrowRightShort className='text-lg' />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

NotificationTab.propTypes = {
  opened: PropTypes.string,
};
