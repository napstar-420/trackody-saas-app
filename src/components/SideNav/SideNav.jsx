import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideNavLink from './sideNavLink';
import NavHeader from './NavHeader';
import SideNavGroup from './sideNavGroup';

export default function SideNav({ children, isNavOpen, setIsNavOpen }) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [expandedTab, setExpandedTab] = useState(null);

  return (
    <>
      <div
        className={`w-72 absolute z-20 transition-all ${
          isNavOpen ? 'left-0' : '-left-72'
        } lg:static h-full bg-light_400 dark:bg-dark_500 flex flex-col`}
      >
        <NavHeader />
        <ul
          id='side-nav'
          className='pl-6 pr-4 py-8 h-[calc(100vh-100px)] flex flex-col gap-3 overflow-y-scroll'
        >
          {children.map((child, index) => {
            const { type } = child;
            return type === 'LINK' ? (
              // SINGLE LINK
              <SideNavLink
                key={index}
                name={child.name}
                to={child.link}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ) : type === 'LABEL' ? (
              // LABEL
              <h3 key={index} className='font-medium text-light_600'>
                {child.name}
              </h3>
            ) : type === 'GROUP' ? (
              // GROUP OF LINKS
              <SideNavGroup
                key={index}
                heading={child.heading}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                expandedTab={expandedTab}
                setExpandedTab={setExpandedTab}
              >
                {child.children}
              </SideNavGroup>
            ) : (
              ''
            );
          })}
        </ul>
      </div>
      <div
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={`${
          isNavOpen ? 'lg:hidden' : 'hidden'
        } fixed w-screen h-screen bg-[rgba(0,0,0,0.2)] z-10`}
      ></div>
    </>
  );
}

SideNav.propTypes = {
  children: PropTypes.array,
  isNavOpen: PropTypes.bool,
  setIsNavOpen: PropTypes.func,
};
