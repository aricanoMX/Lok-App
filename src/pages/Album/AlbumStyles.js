import styled from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

import { HomeStyles, UserContainer } from 'pages/Home/HomeStyles';
import {
  ListOfUsersStyles as list,
  CardOfUser as card,
  MoreUsers as more,
} from 'components/ListOfUsers/ListoOfUsersStyles';

export const AlbumStyles = styled(HomeStyles)`
  background: url('https://cdn.hovia.com/app/uploads/blue-white-grunge-watercolour-textures-plain-820x532.jpg');
  background-size: cover;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;

export const AlbumContainer = styled(UserContainer)``;
export const ListOfUsersStyles = styled(list)``;
export const CardOfUser = styled(card)``;
export const MoreUsers = styled(more)``;
