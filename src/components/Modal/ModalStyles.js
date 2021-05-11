import styled from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

export const ModalStyles = styled.div`
  & .modal--open {
    display: grid;
  }
  z-index: 10;
  position: relative;
  max-height: 575px;
  max-width: 500px;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 1.5rem 0;
  padding: 5%;
  & picture > img {
    max-height: 100px;
  }
  & h1 + p {
    width: 80%;
    text-align: justify;
    text-justify: inter-word;
  }
  & form {
    width: 80%;
    & input {
      border: 1px solid #2323;
      border-radius: 0.25rem;
      height: 2rem;
      width: 100%;
      padding: 1rem;
      margin-bottom: 1.25rem;
    }
    & h4 {
      margin: 0.25rem 0 0.5rem;
    }
    & button {
      width: 100%;
      height: 2rem;
    }
  }
  border-radius: 0.5rem;
  background-color: ${palette.whiteColorAlpha};
  box-shadow: 0.25rem 1rem 2rem 0.5px ${palette.dividerColor};
  animation: fadeIn 3s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media ${devices.breakpointsTablet} {
    & h1 + p {
      width: 70%;
    }
    & form {
      width: 65%;
    }
  }
  @media ${devices.breakpointsDesktop} {
    & h1 + p {
      width: 60%;
    }
    & form {
      width: 55%;
    }
  }
`;
