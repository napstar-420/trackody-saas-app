import React from 'react';
import PropTypes from 'prop-types';
import { BsThreeDots } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function KeyStatistics() {
  const keys = [
    {
      value: 6300,
      label: 'Likes',
      percentage: 60,
      start_date: '22 Aug',
      end_date: '22 Aug',
    },
    {
      value: 2500,
      label: 'Comments',
      percentage: 80,
      start_date: '22 Aug',
      end_date: '22 Aug',
    },
    {
      value: 300,
      label: 'Shares',
      percentage: 20,
      start_date: '22 Aug',
      end_date: '22 Aug',
    },
  ];

  return (
    <div className='bg-[#fdfcfb] border border-dashed px-8 py-4 rounded-xl h-max'>
      <div className='flex justify-between items-center'>
        <span className='block'>
          <h2 className='text-xl text-light_text font-semibold'>
            Key Statistics
          </h2>
          <p className='text-light_800'>Social activities overview</p>
        </span>
        <button className='bg-gray-200 text-sm text-light_700 p-1 rounded'>
          <BsThreeDots />
        </button>
      </div>
      <div>
        {keys.map((key, index) => (
          <Key key={index} data={key} />
        ))}
      </div>
    </div>
  );
}

function Key({ data }) {
  const { label, value, start_date, end_date, percentage } = data;

  const formatValue = (n) => {
    let newValue = n;
    if (n > 1000) {
      newValue = newValue / 1000;
      newValue = `${newValue}k`;
      return newValue;
    }
    return `${n}`;
  };

  return (
    <div className='flex justify-between items-center py-6 border-b border-dashed'>
      <div>
        <h1 className='text-3xl text-light_text font-semibold'>
          {formatValue(value)}
        </h1>
        <p className='text-light_600'>Average</p>
        <p className='text-light_600'>{label}</p>
      </div>
      <div className='flex flex-col items-end gap-2'>
        <div className='flex items-center text-sm gap-4 text-light_text'>
          <p>
            {start_date} - {end_date}
          </p>
          <span>
            <MdKeyboardArrowDown />
          </span>
        </div>
        <div className='w-36 h-2 bg-light_400_darker overflow-hidden rounded-lg relative'>
          <div
            className='absolute left-0 h-full bg-yellow-500'
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

Key.propTypes = {
  data: PropTypes.object,
};
