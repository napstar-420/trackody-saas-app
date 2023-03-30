import React from 'react';
import PropTypes from 'prop-types';
import { BsThreeDots } from 'react-icons/bs';
import { FcDribbble } from 'react-icons/fc';

export default function Channels() {
  return (
    <div className='bg-[#fdfcfb] border border-dashed px-8 py-4 rounded-xl h-max'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-3xl font-bold text-light_text'>234,456</h1>
          <p className='text-sm text-light_600 mt-1'>Users from all channels</p>
        </div>
        <button className='bg-gray-200 text-sm text-light_700 p-1 rounded'>
          <BsThreeDots />
        </button>
      </div>
      <div className='my-4'>
        <Channel
          Icon={FcDribbble}
          name={'Dribble'}
          desc={'Community'}
          percentage={64}
        />
        <Channel
          Icon={FcDribbble}
          name={'Dribble'}
          desc={'Community'}
          percentage={95}
        />
        <Channel
          Icon={FcDribbble}
          name={'Dribble'}
          desc={'Community'}
          percentage={10}
        />
        <Channel
          Icon={FcDribbble}
          name={'Dribble'}
          desc={'Community'}
          percentage={55}
        />
      </div>
    </div>
  );
}

function Channel({ name, desc, percentage, Icon }) {
  return (
    <div className='grid gap-1 grid-cols-[auto_auto_1fr_auto] items-center border-b border-dashed py-4'>
      <Icon className='text-5xl' />
      <div className='flex flex-col justify-center gap-[2px]'>
        <h4 className='font-medium text-light_text text-lg leading-none'>
          {name}
        </h4>
        <p className='text-sm font-medium text-light_800'>{desc}</p>
      </div>
      <div />
      <div className='flex items-center gap-2'>
        <div className='w-28 h-2 bg-light_400_darker overflow-hidden rounded-lg relative'>
          <div
            className='absolute left-0 h-full bg-lime-400'
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className='text-light_800'>{percentage}</p>
      </div>
    </div>
  );
}

Channel.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  percentage: PropTypes.number,
  Icon: PropTypes.func,
};
