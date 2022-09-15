import { useState } from "react";
import { Link } from "react-router-dom";
import StyledButton from "../../components/styledButton";
import { playlist } from "../../playlist";
import { songs } from "../../utils/importsongs";
import {
  GeneralContainer,
  CoverImage,
  NavProfile,
  Presentation,
  ProfileContainer,
  UserContainer,
  H2,
} from "./style";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const userImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg";

  const coverImage = playlist[0].img;

  const [pathName, setPathName] = useState(window.location.pathname);

  const handleClickSong = (id) => {
    navigate(`/player/${id}`);
  };

  return (
    <ProfileContainer>
      <UserContainer>
        <CoverImage>
          <img src={coverImage} alt="#" />
        </CoverImage>
        <img src={userImage} alt="#" />
        <div className="user-div">
          <h2>Lorenzo Marques</h2>
          <span>1M Fans</span>
        </div>
        <StyledButton bg_color={"--color-brand3"} bd_color={"--color-brand2"}>
          Become a fan
        </StyledButton>
      </UserContainer>

      <Presentation>
        <h2>Singer</h2>
        <p>Musical genre: Folk</p>
        <p>A random description</p>
      </Presentation>

      <NavProfile>
        <Link
          to={`/${window.location.pathname.split("/")[1]}/pictures`}
          onClick={() =>
            setPathName(`/${window.location.pathname.split("/")[1]}/pictures`)
          }
        >
          Pictures
        </Link>
        <Link
          to={`/${window.location.pathname.split("/")[1]}/songs`}
          onClick={() =>
            setPathName(`/${window.location.pathname.split("/")[1]}/songs`)
          }
        >
          Songs
        </Link>
      </NavProfile>

      {pathName === `/${window.location.pathname.split("/")[1]}/pictures` && (
        <>
          <H2>Pictures</H2>
          <GeneralContainer>
            {playlist.map((element) => {
              return (
                <div key={element.id}>
                  <img src={element.img} alt="" />
                  <span>{element.name}</span>
                </div>
              );
            })}
          </GeneralContainer>
        </>
      )}

      {pathName === `/${window.location.pathname.split("/")[1]}/songs` && (
        <>
          <H2>Songs</H2>
          <GeneralContainer>
            {songs.map((element) => {
              return (
                <div
                  key={element.id}
                  className={element.id}
                  onClick={(e) => handleClickSong(e.target.className)}
                >
                  <img src={element.img} alt="" className={element.id} />
                  <div>
                    <span>{element.name}</span>
                  </div>
                </div>
              );
            })}
          </GeneralContainer>
        </>
      )}
    </ProfileContainer>
  );
};

export default ProfilePage;
