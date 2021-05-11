import React, { useState, useEffect } from 'react';

import getUsers from 'helpers/getUsers';
import SEOHeader from 'components/SEOHeader';
import ListOfUsers from 'components/ListOfUsers/ListOfUsers';

import { HomeStyles } from './HomeStyles';

const Home = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    // validateUsers();
    getUsers().then((user) => setUsers(user));
  }, []);

  // const validateUsers = () => {};

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

      <ListOfUsers users={users} />
    </HomeStyles>
  );
};

export default Home;
