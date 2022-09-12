import { CardContainer } from "./style";

const PlayList = ({ playlistName, playlistLength, img }) => {
  return (
    <CardContainer>
      <div>
        <img src={img} alt={playlistName} />
      </div>
      <h3>{playlistName}</h3>
      <span>{playlistLength} Tracks</span>
    </CardContainer>
  );
};

export default PlayList;
