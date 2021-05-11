import styled from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

export const ListOfUsersStyles = styled.div`
  height: calc(100vh - 50px);
  background-color: pink;
  & div {
    background-color: green;
    display: grid;
    width: 45%;
    & picture {
      & img {
      }
    }
    & h1 {
    }
    & p {
    }
  }

  @media ${devices.breakpointsTablet} {
    height: calc(100vh - 75px);
  }
  @media ${devices.breakpointsDesktop} {
    height: calc(100vh - 100px);
  }
`;
