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
  background: rgba(255, 145, 0, 0.95);
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
    background-color: rgba(255, 255, 255, 0.35);
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
  border-radius: 1rem 1rem 0 0;
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
      height: 1.75rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: wrap;
    }
    & p {
      font-size: 14px;
      height: 4.5rem;
      margin-bottom: 0.5rem;
      text-align: justify;
      text-justify: inter-word;
      overflow: hidden;
      white-space: wrap;
      text-overflow: ellipsis;
    }
    & hr {
      width: 100%;
      /* margin: 0 auto; */
    }
    & div {
      display: grid;
      justify-items: center;
      align-items: center;
      /* gap: 1.5rem 0; */
      & button {
        width: 90%;
        color: rgba(255, 255, 255, 0.75);
        background: beige;
        border: thin solid gray;
        border-radius: 0.5rem;
        height: 1.25rem;
        cursor: pointer;
        & :hover {
          filter: hue-rotate(-72deg);
        }
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
    gap: 1rem 0;
    div {
      p {
        height: 3.375rem;
      }
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
    gap: 1.5rem 0;
  }
`;
export const NewPostsWrapper = styled.div`
  max-height: 100%;
  width: 100%;
  padding: 0.5rem 5%;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 0 0 1rem 1rem;
  & div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & h2 {
      text-align: right;
      font-style: italic;
    }
    & button {
      margin-left: 2.5%;
      padding: 0 0.375rem;
      height: 1.125rem;
      background-image: linear-gradient(to right, #00c6ff 0%, #0072ff 51%, #00c6ff 100%);
      text-align: center;
      transition: 0.5s;
      color: white;
      font-weight: 600;
      border-radius: 0.25rem;
      border: thin solid white;
      cursor: pointer;
      & :hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
      }
    }
  }
  & hr {
    width: 100%;
  }
  & .error {
    color: red;
    font-weight: 600;
    text-align: center;
  }
  & .success {
    color: green;
    font-weight: 600;
    text-align: center;
  }

  & form {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
    gap: 0.25rem 0;
    & input {
      font-weight: 600;
    }
    & input,
    & textarea {
      width: 100%;
      background: transparent;
      border-radius: 0.5rem;
      border: thin solid black;
      padding: 0.25rem 0.5rem;
      outline: none;
      & ::-webkit-input-placeholder {
        color: black;
      }
    }
    & button {
      border-radius: 0.5rem;
      width: 50%;
      border: thin solid white;
      font-size: 0.875rem;
      font-weight: 600;
      background-image: linear-gradient(to right, #ff512f 0%, #f09819 51%, #ff512f 100%);
      transition: 0.5s;
      color: white;
      background-size: 200% auto;
      /* box-shadow: 0 0 20px #eee; */
      & :hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
  @media ${devices.breakpointsTablet} {
  }
  @media ${devices.breakpointsDesktop} {
  }
`;
