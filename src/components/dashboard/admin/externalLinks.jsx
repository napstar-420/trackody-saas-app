import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function ExternalLinks() {
  return (
    <div className='bg-[#fdfcfb] border border-dashed px-8 py-4 rounded-xl'>
      <h2 className='text-[1.1rem] text-light_text font-semibold'>
        External Links
      </h2>
      <p className='text-light_800'>Most used resources</p>
      <div className='my-4'>
        <NavLink
          to={'#'}
          className='grid grid-cols-[1fr_auto_auto] items-center gap-1 py-2 border-b border-dashed'
        >
          <p className='text-primary'>Google Analytics</p>
          <BsBoxArrowUpRight className='text-light_600 text-xl hover:text-primary' />
        </NavLink>
        <NavLink
          to={'#'}
          className='grid grid-cols-[1fr_auto_auto] items-center gap-1 py-2 border-b border-dashed'
        >
          <p className='text-primary'>Facebook Ads</p>
          <BsBoxArrowUpRight className='text-light_600 text-xl hover:text-primary' />
        </NavLink>
      </div>
    </div>
  );
}
