import styled from "styled-components";

export const Input = styled.input`
  margin-bottom: 25px;
  height: 35px;
  border: 2px solid var(--color-grey2);
  margin-top: 10px;
  font-size: 15px;
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  color: var(--color-grey5);

  :focus {
    border: 2px solid var(--color-grey3);
  }
`;

export const CreateAccountDiv = styled.div`
  display: flex;
  margin-top: 25px;

  a {
    color: var(--color-alert2);
    margin-left: 5px;
  }
`;
