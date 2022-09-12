import {
  FavoriteCard,
  FavoritesContainer,
  LeftButton,
  RightButton,
} from "./style";

import { Cont } from "./style";

const Favorites = ({ songs }) => {
  const scrollButton = (direction) => {
    if (direction === "left") {
      return (document.getElementById("2").scrollLeft -= 200);
    }

    if (direction === "right") {
      return (document.getElementById("2").scrollLeft += 200);
    }
  };
  return (
    <Cont>
      <LeftButton onClick={() => scrollButton("left")}></LeftButton>
      <FavoritesContainer id="2">
        <ul>
          {songs.map((element) => (
            <li>
              <FavoriteCard>
                <div>
                  <img src={element.img} alt="" />
                </div>
                <div>
                  <p>{element.name}</p>
                  <span>{element.artist}</span>
                </div>
              </FavoriteCard>
            </li>
          ))}
        </ul>
      </FavoritesContainer>
      <RightButton onClick={() => scrollButton("right")}></RightButton>
    </Cont>
  );
};

export default Favorites;
