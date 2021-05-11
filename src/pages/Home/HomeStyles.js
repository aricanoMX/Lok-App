import styled from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

export const HomeStyles = styled.div`
  display: grid;
  grid-template-rows: 50px calc(100vh - 50px);
  height: 100vh;
  background: right center
    url('https://png.pngtree.com/thumb_back/fw800/background/20191009/pngtree-graphics-asset-of-orange-smoke-image_318554.jpg');
  background-size: cover;
  & header {
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
export const UserContainer = styled.main`
  display: inherit;
  grid-template-rows: 92.5% 7.5%;
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;

export const MoreUsers = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  z-index: 1;
  & button {
    height: 1.5rem;
    width: 6rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    box-shadow: 0.125rem 0.25rem 1rem 1px ${palette.dividerColor};
    & :hover {
      background-color: #2323;
    }
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
