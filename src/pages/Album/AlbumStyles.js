import styled from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

import {
  ListOfUsersStyles as list,
  CardOfUser as card,
  MoreUsers as more,
} from 'components/ListOfUsers/ListoOfUsersStyles';

export const AlbumStyles = styled.div`
  display: grid;
  grid-template-rows: 50px calc(100vh - 50px);
  height: 100vh;
  background: right center
    url('https://cdn.hovia.com/app/uploads/blue-white-grunge-watercolour-textures-plain-820x532.jpg');
  background-size: cover;
  @media ${devices.breakpointsTablet} {
    grid-template-rows: 75px calc(100vh - 75px);
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const ListOfUsersStyles = styled(list)``;

export const CardOfUser = styled(card)`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  @media ${devices.breakpointsTablet} {
    padding: 2.5%;
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const MoreUsers = styled(more)`
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
