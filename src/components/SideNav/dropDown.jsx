import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { AiTwotoneSetting } from 'react-icons/ai';

export default function DropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(null);

  const btnRef = useRef(null);
  const [style, setStyle] = useState({
    display: 'none',
    opacity: 0,
    top: 0,
    left: 0,
    transform: 'translate(0,0)',
  });

  useEffect(() => {
    if (isDropDownOpen === null) return;
    if (isDropDownOpen) {
      setStyle({
        ...style,
        opacity: 1,
        transform: 'translate(0,0px)',
      });
      return;
    } else {
      setStyle({
        ...style,
        display: 'none',
      });
    }
  }, [isDropDownOpen]);

  useLayoutEffect(() => {
    const { bottom, left } = btnRef.current.getBoundingClientRect();
    setStyle({
      ...style,
      top: bottom,
      left: left,
      transform: 'translate(0,20px)',
    });
  }, [btnRef.current]);
  return (
    <>
      <button
        ref={btnRef}
        onMouseEnter={() => {
          setIsDropDownOpen(true);
          setStyle({ ...style, display: 'block' });
        }}
        onMouseLeave={() => {
          setIsDropDownOpen(false);
          setStyle({
            ...style,
            opacity: 0,
            transform: 'translate(0,20px)',
          });
        }}
        className='text-light_600 dark:text-dark_200 hover:text-primary'
      >
        <AiTwotoneSetting />
      </button>
      <div
        className='bg-white z-10 text-sm absolute px-4 py-6 rounded-xl w-56 shadow-[0px_5px_35px_0px] shadow-[#00000025] transition-all'
        style={style}
        onMouseEnter={() => {
          setIsDropDownOpen(true);
          setStyle({ ...style, display: 'block' });
        }}
        onMouseLeave={() => {
          setIsDropDownOpen(false);
          setStyle({
            ...style,
            opacity: 0,
            transform: 'translate(0,20px)',
          });
        }}
      >
        <h3 className='text-slate-500 px-2 mb-1'>PAYMENTS</h3>
        <ul className='grid text-light_text'>
          <li className='hover:bg-primary px-2 cursor-pointer rounded-xl py-2 hover:bg-opacity-20 hover:text-primary'>
            Create Invoice
          </li>
          <li className='hover:bg-primary px-2 cursor-pointer rounded-xl py-2 hover:bg-opacity-20 hover:text-primary'>
            Create Payment
          </li>
          <li className='hover:bg-primary px-2 cursor-pointer rounded-xl py-2 hover:bg-opacity-20 hover:text-primary'>
            Generate Bill
          </li>
          <li className='hover:bg-primary px-2 cursor-pointer rounded-xl py-2 hover:bg-opacity-20 hover:text-primary'>
            Generate Bill
          </li>
          <li className='hover:bg-primary px-2 cursor-pointer rounded-xl py-2 hover:bg-opacity-20 hover:text-primary'>
            Subscriptions
          </li>
          <li className='hover:bg-primary px-2 cursor-pointer rounded-xl py-2 hover:bg-opacity-20 hover:text-primary'>
            Setting
          </li>
        </ul>
      </div>
    </>
  );
}
