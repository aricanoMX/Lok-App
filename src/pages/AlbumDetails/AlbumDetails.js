import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from 'store/context/userContext';

import Header from 'components/Header/Header';
import SEOHeader from 'components/SEOHeader';

import {
  AlbumsStyles,
  AlbumsContainer,
  ListOfAlbumsStyles,
  AlbumContainer,
  AlbumCardContainer,
  CardUserStyles,
  CardStyles,
} from './AlbumDetailsStyles';

const AlbumDetails = () => {
  const { specificUser: user, albums } = useContext(UserContext);
  const history = useHistory();

  const handleReturnAlbums = () => {
    history.push('/album');
  };

  return (
    <AlbumsStyles>
      <SEOHeader title={`Album`} />
      <Header />
      <AlbumsContainer>
        <ListOfAlbumsStyles>
          <h1>{`Album of ${user.first_name} ${user.last_name}`}</h1>
          <AlbumContainer>
            <AlbumCardContainer>
              <CardUserStyles onClick={() => handleReturnAlbums()}>
                <picture>
                  <img src={user.avatar} alt="User Image" />
                </picture>

                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <h4>{user.email}</h4>
              </CardUserStyles>
              {albums.map((album) => (
                <CardStyles key={album.id}>
                  <picture>
                    <img
                      src={`https://picsum.photos/200/300?random=${album.id}`}
                      alt="User Image"
                    />
                  </picture>
                  <figcaption>{`${album.id}.- ${album.title}`}</figcaption>
                </CardStyles>
              ))}
            </AlbumCardContainer>
          </AlbumContainer>
        </ListOfAlbumsStyles>
      </AlbumsContainer>
    </AlbumsStyles>
  );
};

export default AlbumDetails;
