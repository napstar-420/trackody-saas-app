import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BiSun } from 'react-icons/bi';
import { BsGridFill, BsArrowRightShort } from 'react-icons/bs';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import { IoLogOutOutline } from 'react-icons/io5';
import { TbCurrencyEuro } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProfileHeader() {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  return (
    <div className='flex gap-2 items-center relative'>
      <button
        className='p-2 text-2xl border rounded-xl text-zinc-300 hover:text-primary hover:border-primary transition-colors'
        onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
      >
        <BsGridFill />
      </button>
      <QuickLinks isOpen={isQuickLinksOpen} />
      <button className='p-2 text-2xl border rounded-xl text-zinc-300 hover:text-primary hover:border-primary transition-colors'>
        <HiChatBubbleBottomCenterText />
      </button>
      <button className='p-2 text-2xl border rounded-xl text-zinc-300 hover:text-primary hover:border-primary transition-colors'>
        <BiSun />
      </button>
      <button className='px-[14px] py-1 text-2xl text-white bg-primary hover:bg-primary_darken rounded-xl transition-colors'>
        3
      </button>
      <div className='flex gap-2 items-center'>
        <div
          className='w-10 h-10 rounded-lg bg-cover bg-center cursor-pointer'
          style={{
            backgroundImage:
              'url(https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg)',
          }}
        ></div>
        <div>
          <NavLink
            to={'/admin/profile'}
            className='text-light_text hover:text-primary'
          >
            Kristen Stewart
          </NavLink>
          <p className='text-sm text-light_500'>Actress</p>
        </div>
        <button className='ml-10 text-2xl text-light_700 hover:text-light_900_darker'>
          <IoLogOutOutline />
        </button>
      </div>
    </div>
  );
}

function QuickLinks({ isOpen }) {
  const links = [
    {
      label: 'Accounting',
      desc: 'eCommerce',
      Icon: TbCurrencyEuro,
    },
    {
      label: 'Administration',
      desc: 'console',
      Icon: TbCurrencyEuro,
    },
    {
      label: 'Projects',
      desc: 'pending tasks',
      Icon: TbCurrencyEuro,
    },
    {
      label: 'Customers',
      desc: 'latest cases',
      Icon: TbCurrencyEuro,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='absolute w-80 transition-all bg-white rounded-xl overflow-hidden shadow-2xl'
          style={{ left: 0, top: 50 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transitionTimingFunction: 'ease' }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <div className='bg-[#2aa0b0] text-center py-8'>
              <h2 className='text-white text-lg'>Quick Links</h2>
              <span className='text-[0.7rem] bg-primary_lighten text-white px-2 py-1 rounded-lg inline-block mt-2'>
                25 pending tasks
              </span>
            </div>
            <div className='grid grid-cols-2'>
              {links.map((link, index) => {
                const { label, desc, Icon } = link;
                return (
                  <div
                    key={index}
                    className={`flex flex-col hover:bg-gray-100 items-center py-5 cursor-pointer ${
                      index === 0
                        ? 'border-b border-r'
                        : index === links.length - 1
                        ? 'border-t border-l'
                        : ''
                    }`}
                  >
                    <p>
                      <Icon className='text-4xl text-primary' />
                    </p>
                    <h3 className='text-light_text font-medium mt-3'>
                      {label}
                    </h3>
                    <p className='text-sm text-gray-400'>{desc}</p>
                  </div>
                );
              })}
            </div>
            <div className='border-t py-4 text-center'>
              <button className='m-auto text-gray-500 hover:text-primary transition-colors flex items-center gap-2 text-sm '>
                View all
                <BsArrowRightShort className='text-lg' />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

QuickLinks.propTypes = {
  isOpen: PropTypes.bool,
};
