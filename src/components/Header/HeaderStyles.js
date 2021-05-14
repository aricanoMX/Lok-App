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
        list-style: none;
        & small {
          & :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .active {
    text-decoration: underline;
    color: black;
    font-weight: 800;
    filter: drop-shadow(0 0 0.125rem rgba(255, 255, 255, 0.5));
    /* line-height: 0.125rem; */
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
    & div {
      justify-content: flex-end;
      padding-right: 12.5%;
      & ul {
        & li {
          & small {
            font-size: 1rem;
          }
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
