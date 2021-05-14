import React from 'react';
import { Link } from 'react-router-dom';

import { HOME, ALBUM, LOGOUT } from 'routes/paths';

import { HeaderStyles } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderStyles>
      <Link to={HOME}>
        <picture>
          <img
            src="https://logos.textgiraffe.com/logos/logo-name/Lok-designstyle-boots-m.png"
            alt="Logo"
          />
        </picture>
      </Link>
      <div>
        <ul>
          <li>
            <Link to={HOME}>
              <small>Home</small>
            </Link>
          </li>
          <li>
            <Link to={ALBUM}>
              <small>Album</small>
            </Link>
          </li>
          <li>
            <Link to={LOGOUT}>
              <small>Sign Out</small>
            </Link>
          </li>
        </ul>
      </div>
    </HeaderStyles>
  );
};

export default Header;
