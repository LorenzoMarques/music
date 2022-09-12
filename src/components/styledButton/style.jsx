import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 35px;
  border-radius: 5px;
  border: 1.5px solid;
  font-weight: 600;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-grey5);

  font-size: ${(props) => (props.big ? "16px" : "14px")};

  background-color: ${(props) =>
    props.bg_color ? `var(${props.bg_color})` : "var(--color-grey0)"};

  border-color: ${(props) =>
    props.bd_color ? `var(${props.bd_color})` : "var(--color-grey0)"};

  transition: 0.2s;

  :hover {
    filter: brightness(150%);
  }
`;
