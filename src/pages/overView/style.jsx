import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  border: unset;
  color: var(--color-grey5);
  padding: 5px;
  width: 100%;
  margin-left: 10px;
`;

export const OverViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 25px;
  }

  @media (min-width: 800px) {
    .wrap {
      align-self: flex-start;
      margin-left: 330px;
      width: 50vw;
      @media (min-width: 800px) {
        display: flex;
        width: 55vw;
        justify-content: space-between;
      }

      @media (min-width: 980px) {
        margin-left: 330px;
        width: 60vw;
      }

      @media (min-width: 1200px) {
        width: 65vw;
      }
    }
  }
`;

export const InputContainer = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 90vw;
  background-color: var(--color-brand1);
  height: 30px;
  display: flex;
  border-radius: 5px;
  border: 2px solid var(--color-brand1);
  padding-left: 5px;

  @media (min-width: 800px) {
    margin-left: 330px;
    margin-top: 20px;
    width: 50vw;
  }

  @media (min-width: 980px) {
    width: 60vw;
  }

  @media (min-width: 1200px) {
    width: 68vw;
  }
`;
