import PlayList from "../playlist";
import { Container, FeaturesContainer, LeftButton, RightButton } from "./style";

const FeaturesPlaylists = ({ playlist }) => {
  const scrollButton = (direction) => {
    if (direction === "left") {
      return (document.getElementById("1").scrollLeft -= 600);
    }

    if (direction === "right") {
      return (document.getElementById("1").scrollLeft += 600);
    }
  };
  return (
    <Container>
      <h2>My Playlists</h2>
      <LeftButton onClick={() => scrollButton("left")}></LeftButton>
      <FeaturesContainer id="1">
        {playlist.map((element) => {
          return (
            <PlayList
              playlistName={element.name}
              playlistLength={element.tracks.length}
              img={element.img}
            />
          );
        })}
      </FeaturesContainer>
      <RightButton onClick={() => scrollButton("right")}></RightButton>
    </Container>
  );
};

export default FeaturesPlaylists;
