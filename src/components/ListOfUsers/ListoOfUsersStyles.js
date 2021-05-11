import styled from 'styled-components';
import { palette, devices, sizes } from 'styles/GlobalStyles';

export const ListOfUsersStyles = styled.div`
  display: grid;
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
  padding: 0 0 1%;
  & div {
    min-width: 170px;
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
    & div {
      width: 85%;
    }
  }
  @media ${devices.breakpointsDesktop} {
    margin: 0 auto;
    max-width: ${sizes.desktop};
    & div {
      width: 100%;
      /* margin: 0 auto; */
    }
  }
`;
