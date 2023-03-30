import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideNavLink from './sideNavLink';
import NavHeader from './NavHeader';
import SideNavGroup from './sideNavGroup';

export default function SideNav({ children }) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [expandedTab, setExpandedTab] = useState(null);

  return (
    <div className='w-72 h-full bg-light_400 flex flex-col'>
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
  );
}

SideNav.propTypes = {
  children: PropTypes.array,
};
