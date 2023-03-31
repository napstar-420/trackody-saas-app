import React from 'react';
import {
  HiOutlineArrowTrendingDown,
  HiOutlineArrowTrendingUp,
} from 'react-icons/hi2';

export default function HighLights() {
  return (
    <div className='bg-[#fdfcfb] border border-dashed px-8 py-4 rounded-xl h-max'>
      <h2 className='text-[1.1rem] text-light_text font-semibold'>
        Highlights
      </h2>
      <p className='text-light_800'>Latest social statistics</p>
      <div className='my-4'>
        <div className='grid grid-cols-[1fr_auto_auto] items-center gap-1 py-2 border-b border-dashed'>
          <h2 className='text-light_900 font-medium'>Avg. Client Rating</h2>
          <HiOutlineArrowTrendingUp className='text-theme_green text-xl' />
          <p className='text-light_text font-semibold text-sm'>
            7.8<span className='text-light_600'>/10</span>
          </p>
        </div>
        <div className='grid grid-cols-[1fr_auto_auto] items-center gap-1 py-2 border-b border-dashed'>
          <h2 className='text-light_900 font-medium'>Instagram Followers</h2>
          <HiOutlineArrowTrendingDown className='text-red-500 text-xl' />
          <p className='text-light_text font-semibold  text-sm'>780k</p>
        </div>
        <div className='grid grid-cols-[1fr_auto_auto] items-center gap-1 py-2 border-b border-dashed'>
          <h2 className='text-light_900 font-medium'>Google Ads CPC</h2>
          <HiOutlineArrowTrendingUp className='text-theme_green text-xl' />
          <p className='text-light_text font-semibold text-sm'>$2.09</p>
        </div>
      </div>
    </div>
  );
}
