import React from 'react';
import { BiSun } from 'react-icons/bi';
import { BsGridFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';

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
      {/* <div>
        <img src='https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg'/>
        <div>
            <h4>Kristen Stewart</h4>
        </div>
      </div> */}
    </div>
  );
}
