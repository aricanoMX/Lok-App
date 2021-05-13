import React from 'react';

import SEOHeader from 'components/SEOHeader';
import Header from 'components/Header/Header';
import ListOfUsers from 'components/ListOfUsers/ListOfUsers';

import { HomeStyles, UserContainer } from './HomeStyles';

const Home = () => {
  return (
    <HomeStyles>
      <SEOHeader title={`Home`} />
      <Header title="Home" />
      <UserContainer>
        <ListOfUsers />
      </UserContainer>
    </HomeStyles>
  );
};

export default Home;
