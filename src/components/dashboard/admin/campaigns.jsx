import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaFilter } from 'react-icons/fa';

const icons = {
  instagram:
    'https://preview.keenthemes.com/good/assets/media/svg/brand-logos/instagram-2-1.svg',
  facebook:
    'https://preview.keenthemes.com/good/assets/media/svg/brand-logos/facebook-4.svg',
  linkedIn:
    'https://preview.keenthemes.com/good/assets/media/svg/brand-logos/linkedin-2.svg',
  youtube:
    'https://preview.keenthemes.com/good/assets/media/svg/brand-logos/youtube-3.svg',
  twitter:
    'https://preview.keenthemes.com/good/assets/media/svg/brand-logos/twitter-2.svg',
};

const avatars = {
  a: 'https://media.istockphoto.com/id/1372641621/photo/portrait-of-a-businessman-on-gray-background.jpg?b=1&s=170667a&w=0&k=20&c=Yyi5slaeNpq_HPcfgy1305VpJSwerPm_s7mTz_bBk6c=',
  b: 'https://media.istockphoto.com/id/1357723739/photo/studio-portrait-of-a-smiling-young-latin-woman.jpg?b=1&s=170667a&w=0&k=20&c=RIMvJI9S1mZytKJydukxUF4hRoyVbR1W3ix6gsdo72I=',
  c: 'https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg',
  d: 'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  e: 'https://npg.si.edu/sites/default/files/styles/grid_default/public/promotion/npg-npg_87_43.jpg?itok=upZ7cNVy',
};

const statuses = {
  live_now: {
    text: 'Live Now',
    color: 'text-lime-400',
    background: 'bg-lime-100',
  },
  paused: {
    text: 'Paused',
    color: 'text-orange-400',
    background: 'bg-orange-100',
  },
  reviewing: {
    text: 'Reviewing',
    color: 'text-blue-400',
    background: 'bg-blue-100',
  },
  Canceled: {
    text: 'Canceled',
    color: 'text-red-400',
    background: 'bg-red-100',
  },
};

const campaigns = [
  {
    name: 'Choti Eid',
    color: 'border-yellow-400',
    created_on: '24 Dec 22',
    end_date: '25 Dec 22',
    platforms: [
      {
        link: icons.facebook,
      },
      {
        link: icons.twitter,
      },
      {
        link: icons.youtube,
      },
    ],
    labor: '24 - 25',
    status: statuses.paused,
    team_members: [
      {
        pic: avatars.a,
      },
      {
        pic: avatars.b,
      },
      {
        pic: avatars.c,
      },
      {
        pic: avatars.d,
      },
      {
        pic: avatars.e,
      },
    ],
  },
  {
    name: 'Badi Eid',
    color: 'border-red-400',
    created_on: '24 Dec 22',
    end_date: '25 Dec 22',
    platforms: [
      {
        link: icons.instagram,
      },
      {
        link: icons.youtube,
      },
    ],
    labor: '24 - 25',
    status: statuses.Canceled,
    team_members: [
      {
        pic: avatars.a,
      },
      {
        pic: avatars.b,
      },
      {
        pic: avatars.c,
      },
      {
        pic: avatars.d,
      },
      {
        pic: avatars.e,
      },
    ],
  },
  {
    name: '14 August',
    color: 'border-green-400',
    created_on: '24 Dec 22',
    end_date: '25 Dec 22',
    platforms: [
      {
        link: icons.facebook,
      },
    ],
    labor: '24 - 25',
    status: statuses.reviewing,
    team_members: [
      {
        pic: avatars.a,
      },
      {
        pic: avatars.b,
      },
      {
        pic: avatars.c,
      },
      {
        pic: avatars.d,
      },
      {
        pic: avatars.e,
      },
    ],
  },
  {
    name: 'Eid Milad-un-Nabi',
    color: 'border-lime-400',
    created_on: '24 Dec 22',
    end_date: '25 Dec 22',
    platforms: [
      {
        link: icons.facebook,
      },
      {
        link: icons.twitter,
      },
      {
        link: icons.instagram,
      },
      {
        link: icons.linkedIn,
      },
    ],
    labor: '24 - 25',
    status: statuses.live_now,
    team_members: [
      {
        pic: avatars.a,
      },
      {
        pic: avatars.b,
      },
      {
        pic: avatars.c,
      },
      {
        pic: avatars.d,
      },
      {
        pic: avatars.e,
      },
    ],
  },
];

export default function Campaigns() {
  const [selected, setSelected] = useState('All Campaigns');

  return (
    <div className='bg-[#fdfcfb] border w-full border-dashed px-8 py-4 rounded-xl h-max'>
      <div className='flex justify-between items-center flex-wrap gap-4'>
        <CampaignNav selected={selected} setSelected={setSelected} />
        <button className='bg-secondary px-4 py-2 text-white rounded-xl hover:bg-secondary_darken transition-colors'>
          Create Campaign
        </button>
      </div>
      <Filter />
      <div id='campaign-wrapper' className='mt-10 overflow-x-auto'>
        {campaigns.map((campaign, index) => (
          <Campaign key={index} data={campaign} />
        ))}
      </div>
    </div>
  );
}

function Campaign({ data }) {
  const {
    name,
    color,
    created_on,
    end_date,
    platforms,
    labor,
    status,
    team_members,
  } = data;
  return (
    <>
      <div
        className={`flex gap-4 justify-between overflow-auto w-[clamp(700px,100%,100%)] items-center border-l-4 ${color} px-4`}
      >
        <div>
          <h2 className='text-light_text font-semibold text-sm lg:text-base'>
            {name}
          </h2>
          <p className='text-[0.6rem] lg:text-sm text-light_800'>
            Created on {created_on}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-1 lg:gap-2'>
            {platforms.map((platform, index) => {
              return (
                <img
                  key={index}
                  src={platform.link}
                  className='w-5 overflow-hidden'
                />
              );
            })}
          </div>
          <p className='text-[0.7rem] lg:text-sm font-semibold text-light_600'>
            Labor {labor}
            years
          </p>
        </div>
        <div
          className={`${status.color} ${status.background} font-semibold text-[0.7rem] px-2 rounded-xl`}
        >
          {status.text}
        </div>
        <div className='flex flex-col items-center gap-1'>
          <div className='flex items-center relative w-[calc(100%-20px)] h-6'>
            {team_members.map((member, index) => {
              return (
                <div
                  key={index}
                  className='w-6 h-6 rounded-full cursor-pointer bg-center bg-cover bg-slate-400 absolute'
                  style={{
                    backgroundImage: `url(${member.pic})`,
                    left: `${index * 13}px`,
                  }}
                ></div>
              );
            })}
          </div>
          <p className='text-[0.7rem] lg:text-sm text-light_900_darker'>
            Team members
          </p>
        </div>
        <div className='flex flex-col gap-1'>
          <h4 className='text-light_text font-semibold text-[0.7rem] lg:text-sm'>
            {created_on} - {end_date}
          </h4>
          <p className='text-sm text-light_800 font-medium'>Date range</p>
        </div>
      </div>
      <div className='border-b border-dashed my-4'></div>
    </>
  );
}

Campaign.propTypes = {
  data: PropTypes.object,
};

function CampaignNav({ selected, setSelected }) {
  const navButtons = [
    {
      name: 'All Campaigns',
      n: 47,
    },
    {
      name: 'Pending',
      n: 8,
    },
    {
      name: 'Completed',
      n: 39,
    },
  ];
  return (
    <div className='pt-4 flex gap-8'>
      {navButtons.map((btn, index) => {
        const { name, n } = btn;
        return (
          <button
            key={index}
            onClick={() => setSelected(name)}
            className={`text-lg border-b-4  pb-3 ${
              selected === name
                ? 'font-[550]text-light_text border-primary'
                : 'text-light_800 border-transparent'
            }`}
          >
            {name}({n})
          </button>
        );
      })}
    </div>
  );
}

CampaignNav.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func,
};

function Filter() {
  return (
    <div className='flex items-center flex-wrap gap-4 justify-between mt-8 border-b border-dashed pb-6'>
      <div className='flex items-center gap-x-10 gap-y-2 flex-wrap'>
        <div className='flex items-center gap-3 text-sm'>
          <span className='text-light_800'>Type</span>
          <button className='flex items-center gap-2 text-light_text font-medium'>
            Oldest
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className='flex items-center gap-3 text-sm'>
          <span className='text-light_800'>Status</span>
          <button className='flex items-center gap-2 text-light_text font-medium'>
            Show all
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className='flex items-center gap-3 text-sm'>
          <span className='text-light_800'>Budget</span>
          <button className='flex items-center gap-2 text-light_text font-medium'>
            Show all
            <MdKeyboardArrowDown />
          </button>
        </div>
      </div>
      <button className='text-light_800 hover:text-primary text-lg'>
        <FaFilter />
      </button>
    </div>
  );
}
