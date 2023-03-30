import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiSun } from 'react-icons/bi';
import { BsGridFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import { IoLogOutOutline } from 'react-icons/io5';

export default function ProfileHeader() {
  return (
    <div className='flex gap-2 items-center'>
      <button className='p-2 text-2xl border rounded-xl text-zinc-300 hover:text-primary hover:border-primary transition-colors'>
        <BsGridFill />
      </button>
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
          <NavLink to={'/admin/profile'} className='text-light_text hover:text-primary'>Kristen Stewart</NavLink>
          <p className='text-sm text-light_500'>Actress</p>
        </div>
        <button className='ml-10 text-2xl text-light_700 hover:text-light_900_darker'>
            <IoLogOutOutline />
        </button>
      </div>
    </div>
  );
}
