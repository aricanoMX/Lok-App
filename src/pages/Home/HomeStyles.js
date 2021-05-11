import styled from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

export const HomeStyles = styled.div`
  height: 100vh;

  & header {
    height: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    & div {
      display: flex;
      justify-content: center;
      & ul {
        display: flex;
        gap: 0 0.75rem;
        & li {
          font-weight: 600;
          list-style: none;
        }
      }
    }
  }
  @media ${devices.breakpointsTablet} {
    & header {
      height: 75px;
    }
  }
  @media ${devices.breakpointsDesktop} {
    & header {
      height: 100px;
    }
  }
`;
