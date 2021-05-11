import React, { useState, useEffect } from 'react';

import getUsers from 'helpers/getUsers';
import SEOHeader from 'components/SEOHeader';
import ListOfUsers from 'components/ListOfUsers/ListOfUsers';

import { HomeStyles, UserContainer, MoreUsers } from './HomeStyles';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((user) => setUsers(user));
  }, []);

  return (
    <HomeStyles>
      <SEOHeader title={`Home`} />
      <header>
        <h3>Welcome Pagafantas</h3>
        <div>
          <ul>
            <li>
              <small>Home</small>
            </li>
            <li>
              <small>Album</small>
            </li>
            <li>
              <small>Sign Out</small>
            </li>
          </ul>
        </div>
      </header>
      <UserContainer>
        <ListOfUsers users={users} />
        <MoreUsers>
          <button onClick={() => alert('peticion para más usuarios')}>More Users</button>
        </MoreUsers>
      </UserContainer>
    </HomeStyles>
  );
};

export default Home;
