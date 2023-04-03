import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';
import ThemeContext from '../../themeContext';
import { AnimatePresence, motion } from 'framer-motion';

export function ThemeToggleBtn({ opened, setOpened }) {
  return (
    <>
      <button
        onMouseEnter={() => setOpened('TT')}
        onMouseLeave={() => setOpened('')}
        className='p-2 text-2xl border rounded-xl text-zinc-300 hover:text-primary hover:border-primary transition-colors'
      >
        <BsFillSunFill />
      </button>
      <ThemeToggler opened={opened} setOpened={setOpened} />
    </>
  );
}

ThemeToggleBtn.propTypes = {
  opened: PropTypes.string,
  setOpened: PropTypes.func,
};

function ThemeToggler({ opened, setOpened }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AnimatePresence>
      {opened === 'TT' && (
        <motion.div
          onMouseEnter={() => setOpened('TT')}
          onMouseLeave={() => setOpened('')}
          className='bg-white p-3 shadow-2xl z-10 absolute w-44 top-10 left-24 rounded-xl flex flex-col gap-2'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transitionTimingFunction: 'ease' }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-3 w-full ${
              theme === 'light'
                ? 'bg-slate-100 text-primary'
                : 'text-light_900_darker'
            } px-4 py-1 rounded-xl`}
          >
            <BsFillSunFill />
            Light
          </button>
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-3 w-full ${
              theme === 'dark'
                ? 'bg-slate-100 text-primary'
                : 'text-light_900_darker'
            } px-4 py-1 rounded-xl`}
          >
            <BsMoonStarsFill />
            Dark
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ThemeToggler.propTypes = {
  opened: PropTypes.string,
  setOpened: PropTypes.func,
};
