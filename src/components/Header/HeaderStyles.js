import styled, { css, keyframes } from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

export const HeaderStyles = styled.header`
  display: inherit;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: ${sizes.desktop};
  overflow-y: hidden;
  & a {
    & picture {
      display: flex;
      justify-items: left;
      padding-left: 10%;
      & img {
        height: 60px;
      }
    }
  }
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
  @media ${devices.breakpointsTablet} {
    grid-template-rows: 75px calc(100vh - 75px);
    & a {
      & picture {
        padding-left: 12.5%;
        & img {
          height: 75px;
        }
      }
    }
  }
  @media ${devices.breakpointsDesktop} {
    & a {
      & picture {
        padding-left: 10%;
      }
    }
    & header {
      margin: 0 auto;
      max-width: ${sizes.desktop};
    }
  }
`;
