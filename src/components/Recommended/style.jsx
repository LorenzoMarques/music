import styled from "styled-components";

export const RecommendedContainer = styled.div`
  height: 40vh;
  overflow: auto;

  width: 90vw;
  margin: auto;
  margin-top: 50px;

  span {
    font-size: 10px;
    color: var(--color-grey3);
  }

  @media (min-width: 800px) {
    height: 20vh;
    margin-left: 0px;
    width: 25vw;
  }
`;

export const Card = styled.div`
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;

  div {
    overflow: hidden;
  }
  :hover {
    img {
      transition: 0.2s;
      transform: scale(1.1);
      filter: brightness(150%);
    }
  }
  img {
    width: 50px;
    height: 50px;
  }

  p {
    margin-bottom: 10px;
  }
  div {
    margin-left: 10px;
  }
`;
