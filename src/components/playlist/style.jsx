import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 150px;
  text-align: left;
  color: var(--color-grey5);
  margin-right: 50px;

  img {
    width: 250px;
    height: 150px;
    transition: 0.2s;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      filter: brightness(150%);
    }
  }

  div {
    overflow: hidden;
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 25px;
  }

  span {
    color: var(--color-grey3);
    font-size: 15px;
  }
`;
