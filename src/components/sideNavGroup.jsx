import React from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SideNavGroup({
  heading,
  activeTab,
  setActiveTab,
  expandedTab,
  setExpandedTab,
  children
}) {
    
  function handleTabChange(name) {
    if (expandedTab === name) {
      setExpandedTab(null);
      return;
    }
    setExpandedTab(name);
  }

  return (
    <div>
      <h2
        className={`${
          activeTab === heading
            ? 'side-nav-link-heading text-light_text'
            : 'side-nav-link-heading'
        }`}
        onClick={() => handleTabChange(heading)}
      >
        <HiArrowNarrowDown
          className={expandedTab === heading ? 'rotate-0' : '-rotate-90'}
        />
        {heading}{' '}
        <MdKeyboardArrowDown
          className={`transition-transform ease-linear duration-300 ${
            expandedTab === heading ? '-rotate-180' : 'rotate-0'
          }`}
        />
      </h2>
      <div
        className={`overflow-hidden flex flex-col transition-all ${
          expandedTab === heading ? 'max-h-96' : 'max-h-0'
        }`}
      >
        {children.map((child, index) => {
          const { name, link } = child;
          return (
            <NavLink
              key={index}
              to={link}
              onClick={() => setActiveTab(heading)}
              className='side-nav-child-link'
            >
              <RxDotFilled /> {name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}


SideNavGroup.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.array,
    expandedTab: PropTypes.string,
    activeTab: PropTypes.string,
    setActiveTab: PropTypes.func,
    setExpandedTab: PropTypes.func,
}