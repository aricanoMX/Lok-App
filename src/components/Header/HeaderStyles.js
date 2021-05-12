import styled, { css, keyframes } from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

export const HeaderStyles = styled.header`
  width: 100%;
  display: inherit;
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
  @media ${devices.breakpointsTablet} {
    grid-template-rows: 75px calc(100vh - 75px);
  }
  @media ${devices.breakpointsDesktop} {
    & header {
      margin: 0 auto;
      max-width: ${sizes.desktop};
    }
  }
`;
