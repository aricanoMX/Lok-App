import React from 'react';
import { NavLink } from 'react-router-dom';

import { HOME, ALBUM, LOGOUT } from 'routes/paths';

import { HeaderStyles } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderStyles>
      <NavLink to={HOME}>
        <picture>
          <img
            src="https://logos.textgiraffe.com/logos/logo-name/Lok-designstyle-boots-m.png"
            alt="Logo"
          />
        </picture>
      </NavLink>
      <div>
        <ul>
          <li>
            <NavLink to={HOME} activeClassName="active">
              <small>Home</small>
            </NavLink>
          </li>
          <li>
            <NavLink to={ALBUM} activeClassName="active">
              <small>Album</small>
            </NavLink>
          </li>
          <li>
            <NavLink to={LOGOUT} activeClassName="active">
              <small>Sign Out</small>
            </NavLink>
          </li>
        </ul>
      </div>
    </HeaderStyles>
  );
};

export default Header;
