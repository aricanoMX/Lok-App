import styled from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

import {
  AlbumStyles as HomeStyles,
  AlbumContainer as UserContainer,
  ListOfUsersStyles,
} from 'pages/Album/AlbumStyles';

export const AlbumsStyles = styled(HomeStyles)`
  background: url('https://cdn.hovia.com/app/uploads/blue-white-grunge-watercolour-textures-plain-820x532.jpg');
  background-size: cover;
`;

export const AlbumsContainer = styled(UserContainer)``;
export const ListOfAlbumsStyles = styled(ListOfUsersStyles)`
  grid-template-rows: 50px 1fr;
  & h1 {
    padding-left: 0.25rem;
    /* max-height: 50px; */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const AlbumContainer = styled.div`
  min-height: 100%;
  max-height: 100%;
  display: grid;
  padding: 1rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  overflow-y: scroll;
  & ::-webkit-scrollbar {
    display: none;
  }
  @media ${devices.breakpointsTablet} {
    padding: 2rem 1rem;
  }
  @media ${devices.breakpointsDesktop} {
    padding: 2rem;
  }
`;
export const AlbumCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 0;
  background-color: transparent;
  gap: 1.5rem 0.5rem;
  @media ${devices.breakpointsTablet} {
    grid-template-columns: 1fr 1fr 1fr;
    /* align-items: center; */
    gap: 2rem;
  }
  @media ${devices.breakpointsDesktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const CardUserStyles = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 165px;
  max-height: 190px;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: #0f709f;
  & :hover {
    cursor: pointer;
  }
  & picture {
    object-fit: cover;
    & img {
      border-radius: 50%;
      height: 100px;
      width: 100px;
    }
  }
  & h2,
  h4 {
    color: white;
    text-align: center;
  }
  & h4 {
    font-size: 0.75rem;
  }

  @media ${devices.breakpointsTablet} {
    width: 215px;
    max-height: 240px;
    border-radius: 2rem;
    & picture {
      object-fit: cover;
      & img {
        height: 125px;
        width: 125px;
      }
    }
  }
  @media ${devices.breakpointsDesktop} {
    width: 200px;
    max-height: 225px;
  }
`;
export const CardStyles = styled.div`
  position: relative;
  width: 165px;
  max-height: 190px;
  padding: 0.25rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  & picture {
    object-fit: cover;
    & img {
      padding: 0.125rem;
      border-radius: 1rem;
      height: 100%;
      width: 100%;
    }
  }
  & figcaption {
    position: absolute;
    right: 0.75rem;
    bottom: 1.75rem;

    text-align: right;
    width: 80%;
    z-index: 2;
    font-size: 0.875rem;
    color: white;
    font-weight: bold;
    filter: drop-shadow(0 0 0.75rem crimson);
  }
  @media ${devices.breakpointsTablet} {
    width: 215px;
    max-height: 240px;
    border-radius: 2rem;
    & picture {
      object-fit: cover;
      & img {
        padding: 0.125rem;
        border-radius: 2rem;
        height: 100%;
        width: 100%;
      }
    }
  }
  @media ${devices.breakpointsDesktop} {
    width: 200px;
    max-height: 225px;
  }
`;
