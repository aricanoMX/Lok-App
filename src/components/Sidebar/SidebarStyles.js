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
  z-index: 10;
  display: grid;

  height: 100vh;
  width: 50vw;
  padding: 5% 0;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 1rem 0 0 1rem;
  box-shadow: -0.125rem 0 1rem 0.25rem #2323;
  ${(props) =>
    props.state === '' &&
    css`
      margin-left: -50vw;
    `}
  ${(props) =>
    props.state === 'true' &&
    css`
      ${intoScreen()};
    `};
  ${(props) =>
    props.state === 'false' &&
    css`
      ${outScreen()};
    `};
  & hr {
    width: 90%;
    opacity: 0.2;
    margin: 0.25rem 0;
    height: 1px;
  }

  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
    width: 35vw;

    /* display: none; */
  }
`;
