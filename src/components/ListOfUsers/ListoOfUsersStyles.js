import styled from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

export const ListOfUsersStyles = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  padding: 2.5% 1%;
  overflow-y: scroll;
  @media ${devices.breakpointsTablet} {
    padding: 1.5%;
  }
  @media ${devices.breakpointsDesktop} {
    /* height: calc(100vh - 100px); */
  }
`;

export const CardOfUser = styled.div`
  width: 100%;
  display: grid;
  grid-template: auto/ 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 1rem 0.125rem;
  padding: 5% 0 1%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  & div {
    min-width: 170px;
    min-height: 100%;
    max-height: 300px;
    display: grid;
    grid-template: 1fr 0.5fr 0.5fr / 1fr;
    justify-content: center;
    align-items: center;
    padding: 5% 0 2.5%;
    text-align: center;
    border: thin solid ${palette.dividerColor};
    border-radius: 0.5rem;
    background-color: ${palette.whiteColor};
    box-shadow: 0.25rem 1rem 2rem 0.5px ${palette.dividerColor};
    cursor: pointer;
    & :hover {
      box-shadow: 0.125rem 0.125rem 1rem 1px black;
      transform: translate(2px, 2px);
    }
    & picture {
      margin: 0 auto;
      object-fit: cover;
      & img {
        width: 100px;
        border-radius: 50%;
        box-shadow: 0.25rem 0.25rem 2rem 0.5px ${palette.dividerColor};
      }
    }
    & p {
      font-size: 14px;
    }
  }
  @media ${devices.breakpointsTablet} {
    gap: 1.5rem;
    padding: 2.5%;
    & div {
      width: 85%;
    }
  }
  @media ${devices.breakpointsDesktop} {
    grid-template: auto/ repeat(3, 1fr);
    margin: 0 auto;
    max-width: ${sizes.desktop};
    & div {
      width: 100%;
      /* margin: 0 auto; */
    }
  }
`;
export const MoreUsers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  z-index: 1;
  background: transparent;
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
