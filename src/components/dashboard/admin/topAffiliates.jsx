import React from 'react';
import PropTypes from 'prop-types';

const affiliates = [
  {
    name: 'Shah Jahan',
    change: -80,
    percentage: 10,
    revenue: 5423,
    image: 'https://www.tajmahal.org.uk/gifs/shah-jahan.jpg',
  },
  {
    name: 'Mumtaz Begum',
    change: +112,
    percentage: 55,
    revenue: 4235,
    image:
      'https://i.pinimg.com/474x/24/36/39/2436394453726ae68c5934a0a0993d02--facebook-photos.jpg',
  },
  {
    name: 'Allah Dita',
    change: -10,
    percentage: 72,
    revenue: 3216,
    image: 'https://i1.sndcdn.com/artworks-000083000735-j6y3vp-t500x500.jpg',
  },
  {
    name: 'Tipu Sultan',
    change: +250,
    percentage: 99,
    revenue: 2456,
    image:
      'https://www.thenews.com.pk//assets/uploads/akhbar/2019-03-09/441415_4772432_tpu_akhbar.jpg',
  },
];

export default function TopAffiliates() {
  return (
    <div className='bg-[#fdfcfb] border border-dashed px-8 py-4 rounded-xl h-max'>
      <h1 className='text-3xl font-bold text-light_text'>Top Affiliates</h1>
      <p className='text-sm text-light_600 mt-1'>Advertisers Details</p>
      <div className='flex justify-end gap-10 text-light_900_darker'>
        <h2>Revenue</h2>
        <h2>Change</h2>
      </div>
      <div className='my-4'>
        {affiliates.map((affiliate, index) => (
          <Affiliate key={index} data={affiliate} index={index} />
        ))}
      </div>
    </div>
  );
}
function Affiliate(props) {
  const { name, change, percentage, revenue, image } = props.data;
  const { index } = props;
  return (
    <div className='flex gap-2 items-center border-b border-dashed py-4'>
      <p className='text-light_800'>#{index}</p>
      <div
        className='w-10 h-10 bg-slate-400 rounded-full bg-cover bg-center'
        style={{ backgroundImage: `url(${image})` }}
      />
      <h4>{name}</h4>
      <span className='block grow' />
      <div className='flex flex-col items-center'>
        <h5 className='text-light_800'>${revenue}</h5>
        <div className='w-28 h-2 bg-light_400_darker overflow-hidden rounded-lg relative'>
          <div
            className='absolute left-0 h-full bg-lime-400'
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <h5
        className={`${
          change > 0 ? 'text-theme_green' : 'text-red-500'
        } w-14 text-right`}
      >
        {change > 0 ? `+${change}` : change}%
      </h5>
    </div>
  );
}

Affiliate.propTypes = {
  index: PropTypes.number,
  data: PropTypes.object,
};
