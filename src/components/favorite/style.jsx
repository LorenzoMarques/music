import styled from "styled-components";

export const FavoritesContainer = styled.div`
  height: 150px;
  overflow: auto;

  width: 90vw;
  margin: auto;
  margin-top: 50px;
  scroll-behavior: smooth;

  position: relative;

  ul {
    display: flex;
  }

  span {
    font-size: 10px;
    color: var(--color-grey3);
  }

  @media (min-width: 800px) {
    margin-left: 0px;
    width: 25vw;
  }
`;

export const FavoriteCard = styled.div`
  margin-right: 25px;
  div {
    overflow: hidden;
  }

  img {
    transition: 0.2s;
    width: 80px;
    height: 80px;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      filter: brightness(150%);
    }
  }

  p {
    margin-bottom: 5px;
  }
`;

export const RightButton = styled.button`
  visibility: hidden;
  @media (min-width: 800px) {
    visibility: visible;

    position: absolute;
    right: -30px;
    top: 25%;
    background-color: transparent;
    border: unset;
    color: var(--color-grey6);
    transition: 0.2s;
    padding: 10px;
    box-shadow: 2px -2px 0 1px var(--color-grey6) inset;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    transform: rotate(225deg);
    :hover {
      transform: rotate(225deg) scale(1.1);
    }
  }
`;

export const LeftButton = styled.button`
  visibility: hidden;

  @media (min-width: 800px) {
    visibility: visible;
    background-color: antiquewhite;

    position: absolute;
    left: -30px;
    top: 25%;
    background-color: transparent;
    border: unset;
    transition: 0.2s;
    padding: 10px;
    box-shadow: 2px -2px 0 1px var(--color-grey6) inset;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    transform: rotate(45deg);
    :hover {
      transform: rotate(45deg) scale(1.1);
    }
  }
`;

export const Cont = styled.div`
  position: relative;
`;
