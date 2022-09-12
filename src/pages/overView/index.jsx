import FeaturesPlaylists from "../../components/featuresPlaylists";
import { playlist } from "../../playlist";
import { Input, InputContainer } from "./style";
import { OverViewContainer } from "./style";
import { BiSearchAlt } from "react-icons/bi";
import Recommended from "../../components/Recommended";
import { songs } from "../../playlist";
import Favorites from "../../components/favorite";

const OverView = () => {
  return (
    <OverViewContainer>
      <InputContainer>
        <BiSearchAlt color="white" size={"25px"} />
        <Input type="text" placeholder="Search" />
      </InputContainer>

      <FeaturesPlaylists playlist={playlist} />
      <div className="wrap">
        <div>
          <h2>Recommended</h2>
          <Recommended songs={songs} />
        </div>

        <div>
          <h2>Favorites</h2>
          <Favorites songs={songs} />
        </div>
      </div>
    </OverViewContainer>
  );
};

export default OverView;
