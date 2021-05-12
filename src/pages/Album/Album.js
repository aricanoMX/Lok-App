import React from 'react';

import Header from '../../components/Header/Header';
import SEOHeader from 'components/SEOHeader';

import { AlbumStyles } from './AlbumStyles';

const Album = () => {
  return (
    <AlbumStyles>
      <SEOHeader title={`Home`} />
      <Header title="Album" />
    </AlbumStyles>
  );
};

export default Album;
