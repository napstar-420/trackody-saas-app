import React from 'react';

export default function PerformanceOverview() {
  return (
    <div className='sm:col-start-1 sm:col-end-3 xl:col-end-2 xl:row-start-1 xl:row-end-3 bg-[#fdfcfb] border border-dashed px-8 py-4 rounded-xl'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-lg text-light_text font-semibold'>
            Performance Overview
          </h2>
          <p className='text-light_800 text-sm'>Users from all channels</p>
        </div>
        <div className='flex gap-1'>
          <button className='text-light_800 px-4 py-2 rounded-xl text-sm'>
            Month
          </button>
          <button className='text-light_800 px-4 py-2 rounded-xl bg-light_800 bg-opacity-[0.05] text-sm'>
            Week
          </button>
        </div>
      </div>
      <div className='text-4xl text-center py-8 text-light_800'>
        WORKING ON GRAPH
      </div>
    </div>
  );
}