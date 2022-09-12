import { Card, RecommendedContainer } from "./style";

const Recommended = ({ songs }) => {
  return (
    <RecommendedContainer>
      <ul>
        {songs.map((element) => (
          <li>
            <Card>
              <div>
                <img src={element.img} alt="" />
              </div>
              <div>
                <p>{element.name}</p>
                <span>{element.artist}</span>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </RecommendedContainer>
  );
};

export default Recommended;
