import React, { useState, useContext } from 'react';

import Header from 'components/Header/Header';
import SEOHeader from 'components/SEOHeader';

import UserContext from 'store/context/userContext';

import {
  AlbumStyles,
  AlbumContainer,
  ListOfUsersStyles,
  CardOfUser,
  MoreUsers,
} from './AlbumStyles';

const Album = () => {
  const { users, toggleAlbums } = useContext(UserContext);

  return (
    <AlbumStyles>
      <SEOHeader title={`Album`} />
      <Header title="Album" />
      <AlbumContainer>
        <ListOfUsersStyles>
          <h1>Albums</h1>
          <CardOfUser>
            {users.map((user) => (
              <div key={user.id} onClick={() => toggleAlbums(user.id)}>
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
      </AlbumContainer>
    </AlbumStyles>
  );
};

export default Album;
