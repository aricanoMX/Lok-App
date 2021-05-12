import React, { useState, useEffect, useContext } from 'react';

import getUsers from 'helpers/getUsers';

import SEOHeader from 'components/SEOHeader';
import ListOfUsers from 'components/ListOfUsers/ListOfUsers';

import { HomeStyles, UserContainer, MoreUsers } from './HomeStyles';
import Header from '../../components/Header/Header';
import UserContext from 'context/userContext';

const Home = () => {
  const { users } = useContext(UserContext);

  return (
    <HomeStyles>
      <SEOHeader title={`Home`} />
      <Header title="Home" />
      <UserContainer>
        <ListOfUsers />
        <MoreUsers>
          <button onClick={() => updateMoreUsers}>More Users</button>
        </MoreUsers>
      </UserContainer>
    </HomeStyles>
  );
};

export default Home;
