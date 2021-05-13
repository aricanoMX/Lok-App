import styled, { css, keyframes } from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

const intoScreen = ({ time = '0.75s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${intoFrames} ${type} forwards;
`;

const intoFrames = keyframes`
  from {
    margin-right: -100%;
    opacity: 0;
    visibility: hidden;
  }
  to{
    margin-right: 0;
    opacity: 1;
    visibility: visible;
  }
`;
const outScreen = ({ time = '0.75s', type = 'ease-in-out' } = {}) => css`
  animation: ${time} ${outFrames} ${type} forwards;
`;

const outFrames = keyframes`
  from {
    margin-right: 0;
    opacity: 1;
    visibility: visible;
  }
  to {
    margin-right: -100%;
    opacity: 0;
    visibility: hidden;
  }
`;

export const SidebarStyle = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  height: 100vh;
  width: 50vw;
  /* padding: 2.5% 0; */
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: -0.125rem 0 1rem 0.25rem #2323;
  z-index: 10;

  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
    width: 35vw;
    border-radius: 1rem 0 0 1rem;

    /* display: none; */
  }
`;
export const SidebarWrapper = styled.div`
  display: grid;
  grid-template: 40% 2px 7.5% auto / 1fr;
  justify-items: center;
  align-items: center;
  background: orange;
  height: 100%;
  padding: 2.5%;
  overflow: hidden;
  & .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;
    padding: 0 2.5%;
  }
  & hr {
    width: 90%;
    opacity: 0.2;
    margin: 0.25rem 0;
    height: 1px;
    border: 1px solid black;
  }
  @media ${devices.breakpointsTablet} {
    grid-template: 37.5% 2px 7.5% auto / 1fr;
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
export const UserWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: inherit;
  text-align: center;
  & div {
    display: inherit;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 180px;
    margin-bottom: 5%;
    border-radius: 25%;
    box-shadow: 0.125rem 0.125rem 1rem 1px rgba(0, 0, 0, 0.25);
    & picture {
      & img {
        margin: 0 auto;
        padding: 0;
        height: 168px;
        border-radius: 25%;
      }
    }
  }
  & figcaption {
    margin-bottom: 5%;
  }
  @media ${devices.breakpointsTablet} {
    & div {
      height: 200px;
      width: 200px;
    }
  }
  @media ${devices.breakpointsDesktop} {
  }
`;

export const PostsWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1rem 0;
  max-height: 100%;
  width: 100%;
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 1rem;
  overflow-y: scroll;
  & ::-webkit-scrollbar {
    display: none;
  }
  & div {
    display: inherit;
    align-items: center;
    overflow-y: scroll;
    & ::-webkit-scrollbar {
      display: none;
    }
    & h3 {
      height: 2rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    & p {
      text-align: justify;
      text-justify: inter-word;
      margin-bottom: 0.5rem;
    }
    & div {
      display: grid;
      align-items: center;
      gap: 0.125rem 0;
      & button {
        width: 100%;
        color: rgba(255, 255, 255, 0.75);
        background: beige;
        border: thin solid gray;
        border-radius: 0.5rem;
        height: 1.25rem;
        &:nth-of-type(1) {
          background: #0076e0;
        }
        &:nth-of-type(2) {
          background: #f0534f;
        }
      }
    }
  }

  @media ${devices.breakpointsTablet} {
    div {
      div {
        display: flex;
        justify-content: space-around;
        button {
          height: 1.5rem;
          width: 35%;
        }
      }
    }
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
