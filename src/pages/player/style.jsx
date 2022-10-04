import styled from "styled-components";

export const PlayerContainer = styled.div`
  margin: auto;
  margin-top: 100px;
  width: 300px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  padding: 25px;
`;

export const SongImage = styled.div`
  width: 250px;
  height: 250px;
  border: 2px solid var(--color-grey6);
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const SongNameContainer = styled.div`
  margin-bottom: 10px;
  h3 {
    margin-bottom: 5px;
  }
`;

export const ProgressContainer = styled.div`
  margin-bottom: 25px;
  width: 100%;
  border: 1px solid var(--color-grey2);
  border-radius: 5px;
  height: 7px;
  display: flex;
  align-items: center;
`;

export const StyledProgress = styled.progress`
  width: ${(props) => (props.width ? props.width : "0%")};
  height: 7px;
  background-color: red;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PlayButton = styled.button`
  background-color: transparent;
  border: unset;
`;

export const Arrow = styled.button`
  background-color: transparent;
  border: unset;
`;

export const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: var(--color-grey5);
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
