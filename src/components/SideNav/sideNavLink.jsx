import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { RxDotFilled } from 'react-icons/rx';

export default function SideNavLink({ name, to, activeTab, setActiveTab }) {
  return (
    <NavLink
      to={to}
      onClick={() => setActiveTab(name)}
      className={`side-nav-link ${({ isActive }) =>
        isActive ? 'active' : ''}`}
    >
      <RxDotFilled className={activeTab === name ? 'opacity-0' : ''} /> {name}
    </NavLink>
  );
}

SideNavLink.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
  activeTab: PropTypes.string,
  setActiveTab: PropTypes.func,
};
