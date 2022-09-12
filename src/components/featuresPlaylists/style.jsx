import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 90vw;
  margin: auto;

  h2 {
    margin-top: 50px;
    margin-bottom: -150px;

    @media (min-width: 800px) {
      margin-top: 25px;
      margin-bottom: -25px;
      width: 50vw;
    }

    @media (min-width: 980px) {
      width: 60vw;
    }
  }

  @media (min-width: 800px) {
    margin-left: 330px;
    width: 50vw;
  }

  @media (min-width: 980px) {
    margin-left: 330px;
    width: 60vw;
  }

  @media (min-width: 1200px) {
    width: 65vw;
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  overflow: auto;
  height: 240px;
  margin-top: 50px;
  margin-top: 150px;
  scroll-behavior: smooth;

  @media (min-width: 800px) {
    margin-top: 50px;
  }
`;

export const RightButton = styled.button`
  visibility: hidden;
  @media (min-width: 800px) {
    visibility: visible;

    position: absolute;
    right: -50px;
    top: 45%;
    background-color: transparent;
    border: unset;
    color: var(--color-grey6);
    font-size: 75px;
    transition: 0.2s;
    padding: 20px;
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

    position: absolute;
    left: -50px;
    top: 45%;
    background-color: transparent;
    border: unset;
    font-size: 75px;
    transition: 0.2s;
    padding: 20px;
    box-shadow: 2px -2px 0 1px var(--color-grey6) inset;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    transform: rotate(45deg);
    :hover {
      transform: rotate(45deg) scale(1.1);
    }
  }
`;
