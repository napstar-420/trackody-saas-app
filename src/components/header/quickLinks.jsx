import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightShort, BsGridFill } from 'react-icons/bs';
import { TbCurrencyEuro } from 'react-icons/tb';
import { AnimatePresence, motion } from 'framer-motion';

export function QuickLinksBtn({ opened, setOpened }) {
  return (
    <>
      <button
        className='p-2 text-2xl border rounded-xl text-zinc-300 dark:text-dark_300 dark:border-dark_300 hover:text-primary hover:border-primary dark:hover:text-primary dark:hover:border-primary transition-colors'
        onClick={() => setOpened(opened === 'QL' ? '' : 'QL')}
      >
        <BsGridFill />
      </button>
      <QuickLinks opened={opened} />
    </>
  );
}

QuickLinksBtn.propTypes = {
  opened: PropTypes.string,
  setOpened: PropTypes.func,
};

function QuickLinks({ opened }) {
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
      {opened === 'QL' && (
        <motion.div
          className='absolute w-80 z-10 top-12 left-0 transition-all bg-white rounded-xl overflow-hidden shadow-2xl'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transitionTimingFunction: 'ease' }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
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
                  <h3 className='text-light_text font-medium mt-3'>{label}</h3>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

QuickLinks.propTypes = {
  opened: PropTypes.string,
};
