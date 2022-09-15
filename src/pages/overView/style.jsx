import styled from "styled-components";

export const OverViewContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    margin-top: 15px;
    margin-left: 350px;
    width: 50vw;
  }
`;

export const Post = styled.div`
  width: 100%;
  background-color: var(--color-brand1);
  margin-bottom: 25px;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

  button {
    color: var(--color-grey5);
    background-color: transparent;
    border: unset;
    font-size: 20px;

    display: flex;
    align-items: center;

    :hover {
      filter: brightness(50%);
    }
  }
`;

export const UserPost = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  img {
    width: 50px;
    margin-right: 25px;
    border-radius: 50%;
  }
`;

export const PostBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostedImage = styled.div`
  overflow: hidden;
  max-height: 500px;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }

  img {
    max-width: 850px;
  }
`;
