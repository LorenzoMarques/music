import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
  }
`;

export const UserContainer = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--color-grey7);
  padding-bottom: 25px;
  position: relative;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  @media (min-width: 800px) {
    margin-top: 0px;
    width: 70vw;
    margin-left: 250px;
  }

  img {
    margin-top: 100px;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 2px solid var(--color-grey2);
    z-index: 999;
  }

  .user-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid var(--color-grey2);
    padding-bottom: 10px;
    width: 90%;

    h2,
    span {
      margin-top: 10px;
    }
  }
  button {
    margin-top: 10px;
  }
`;

export const Presentation = styled.div`
  background-color: var(--color-grey7);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  h2,
  p {
    margin-bottom: 10px;
  }

  @media (min-width: 800px) {
    margin-top: 25px;
    width: 70vw;
    margin-left: 250px;
    padding: 25px;
  }
`;

export const CoverImage = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  img {
    width: unset;
    height: unset;
    margin-top: unset;
    z-index: unset;
    border-radius: unset;
  }

  @media (min-width: 800px) {
  }
`;

export const NavProfile = styled.nav`
  width: 100%;
  display: flex;
  background-color: var(--color-grey7);
  margin-top: 25px;
  height: 50px;
  justify-content: space-around;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  a {
    padding: 15px;
    color: var(--color-grey5);
    text-decoration: none;
    :hover {
      filter: brightness(200%);
      border-bottom: 2px solid var(--color-grey5);
    }
  }

  @media (min-width: 800px) {
    margin-top: 15px;
    width: 70vw;
    margin-left: 250px;
  }
`;

export const GeneralContainer = styled.div`
  background-color: var(--color-grey7);
  width: 100%;
  height: ${(props) => (props.height ? props.height : "500px")};
  text-align: center;
  padding: 25px 50px 25px 50px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 100px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  img {
    width: 100px;
    height: 100px;
  }

  div {
    margin-bottom: 10px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100px;

    span {
      font-size: 10px;
      margin-top: 15px;
    }
  }

  @media (min-width: 800px) {
    width: 70vw;
    margin-left: 250px;

    div {
      width: unset;
    }

    img {
      width: 250px;
      height: 250px;
      cursor: pointer;
    }
  }
`;

export const H2 = styled.h2`
  width: 100%;
  background-color: var(--color-grey7);
  padding: 25px;
  text-align: center;

  @media (min-width: 800px) {
    margin-top: 15px;
    width: 70vw;
    margin-left: 250px;
  }
`;
