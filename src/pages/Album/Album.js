import React, { useState, useContext } from 'react';

import Header from 'components/Header/Header';
import SEOHeader from 'components/SEOHeader';
import { UserContainer } from 'pages/Home/HomeStyles';

import UserContext from 'store/context/userContext';

import { AlbumStyles, ListOfUsersStyles, CardOfUser, MoreUsers } from './AlbumStyles';

const Album = () => {
  const { users, setUsers } = useContext(UserContext);

  return (
    <AlbumStyles>
      <SEOHeader title={`Album`} />
      <Header title="Album" />
      <UserContainer>
        <ListOfUsersStyles>
          <CardOfUser>
            {users.map((user) => (
              <div key={user.id}>
                <picture>
                  <img src={user.avatar} alt="User Image" />
                </picture>
                <h3>{`${user.first_name} ${user.last_name}`}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </CardOfUser>
          <MoreUsers>
            {users.length >= 11 ? (
              <button disable>More Users</button>
            ) : (
              <button onClick={() => handleNextPage}>More Users</button>
            )}
          </MoreUsers>
        </ListOfUsersStyles>
      </UserContainer>
    </AlbumStyles>
  );
};

export default Album;
