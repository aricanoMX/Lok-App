import styled from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

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
