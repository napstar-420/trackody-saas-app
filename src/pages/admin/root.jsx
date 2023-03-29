import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AiTwotoneSetting } from 'react-icons/ai';
import SideNavLink from '../../components/sideNavLink';
import SideNavGroup from '../../components/sideNavGroup';

export default function Root() {
  return (
    <div className='grid w-full h-screen grid-cols-[auto_1fr]'>
      <SideNav />
      <Outlet />
    </div>
  );
}

function SideNav() {
  const [expandedTab, setExpandedTab] = useState('Publisher');
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isDropDownOpen, setIsDropDownOpen] = useState(null);

  const btnRef = useRef(null);
  const [style, setStyle] = useState({
    display: 'block',
    opacity: 1,
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

  const links = [
    {
      heading: 'Publisher',
      children: [
        {
          name: 'Add',
          link: '/admin/publisher/add',
        },
        {
          name: 'Manage',
          link: '/admin/publisher/manage',
        },
      ],
    },
    {
      heading: 'Domains',
      children: [
        {
          name: 'Add',
          link: '/admin/domain/add',
        },
        {
          name: 'Manage',
          link: '/admin/domain/manage',
        },
      ],
    },
    {
      heading: 'Network',
      children: [
        {
          name: 'Add',
          link: '/admin/network/add',
        },
        {
          name: 'Manage',
          link: '/admin/network/manage',
        },
      ],
    },
    {
      heading: 'Offers',
      children: [
        {
          name: 'Add',
          link: '/admin/offer/add',
        },
        {
          name: 'Manage',
          link: '/admin/offer/manage',
        },
      ],
    },
    {
      heading: 'Reports',
      children: [
        {
          name: 'Networks',
          link: '/admin/report/networks',
        },
        {
          name: 'Manage',
          link: '/admin/report/manage',
        },
        {
          name: 'Publishers',
          link: '/admin/report/publishers',
        },
        {
          name: 'Clicks',
          link: '/admin/report/clicks',
        },
        {
          name: 'Conversions',
          link: '/admin/report/conversions',
        },
        {
          name: 'Sessions',
          link: '/admin/report/sessions',
        },
      ],
    },
  ];

  return (
    <div className='w-72 h-full bg-light_400 flex flex-col'>
      <div className='px-6 py-8 border-b border-dashed flex justify-between'>
        <NavLink to={'/'} className='text-2xl font-bold'>
          <span className='text-light_text'>Trac</span>
          <span className='text-secondary'>kody</span>
        </NavLink>
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
          className='text-light_600 hover:text-primary'
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
      </div>
      <ul
        id='side-nav'
        className='px-6 py-8 h-[calc(100vh-100px)] flex flex-col gap-1 overflow-y-scroll'
      >
        <SideNavLink
          name={'Dashboard'}
          to={'/admin/'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {links.map((link, index) => {
          const { heading, children } = link;
          return (
            <SideNavGroup
              key={index}
              heading={heading}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              expandedTab={expandedTab}
              setExpandedTab={setExpandedTab}
            >
              {children}
            </SideNavGroup>
          );
        })}
        <h3 className='text-lg font-semibold text-light_600'>Finance</h3>
        <SideNavLink
          name={'Billing'}
          to={'/admin/billing'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <h3 className='text-lg font-semibold text-light_600'>Setting</h3>
        <SideNavLink
          name={'Customize'}
          to={'/admin/customize'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SideNavLink
          name={'Account'}
          to={'/admin/account'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
    </div>
  );
}
