import styled from "styled-components";

export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

export const User = styled.div`
  display: flex;
  button {
    border: unset;
    background-color: var(--color-brand1);
    color: var(--color-grey5);
    width: 65px;
    transition: 0.5s;
    :hover {
      transform: scale(1.1);
    }
  }
  h3 {
    margin-top: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
  }
`;

export const HeaderContainer = styled.header`
  background-color: var(--color-brand1);
  color: var(--color-grey5);
  position: relative;
  padding: 15px;

  @media (min-width: 700px) {
    width: 300px;
    height: 100vh;
    overflow: auto;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 25px;
  div {
    display: flex;
    transition: 0.5s;
    :hover {
      transform: scale(1.1);
    }
  }
  a {
    color: var(--color-grey5);
    text-decoration: none;
    margin-bottom: 10px;
    width: 100px;
    margin-left: 10px;
  }

  @media (min-width: 700px) {
    margin-top: 40%;

    a {
      font-size: 20px;
    }

    .link {
      margin: auto;
      margin-bottom: 10px;
    }
  }
`;

export const Div = styled.div`
  height: 2px;
  margin-bottom: 25px;
  margin-top: 15px;
`;

export const Line = styled.div`
  height: 2px;
  margin: auto;
  margin-bottom: 25px;
  margin-top: 15px;
  width: 60%;
  background-color: var(--color-grey5);
  opacity: 30%;
`;

export const NavToggle = styled.button`
  position: absolute;
  right: 10px;
  top: 25px;
  background-color: var(--color-brand1);
  border: unset;
`;
