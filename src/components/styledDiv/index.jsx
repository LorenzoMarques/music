import styled from "styled-components";

export const DivContainer = styled.div`
  margin: auto;
  margin-top: 150px;
  background-color: var(--color-brand1);
  width: 90vw;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 10px;

  h2 {
    margin-bottom: 25px;
    align-self: center;
  }

  @media (min-width: 800px) {
    margin-top: 100px;
    width: 30vw;
  }
`;
