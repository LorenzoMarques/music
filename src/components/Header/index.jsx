import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  Img,
  User,
  Nav,
  Div,
  NavToggle,
  Line,
  Unauthorized,
} from "./style";
import {
  MdViewModule,
  MdNotificationsNone,
  MdOutlineAccountCircle,
  MdLegendToggle,
} from "react-icons/md";
import { TbNews } from "react-icons/tb";
import {
  RiPlayListFill,
  RiCompassDiscoverLine,
  RiDashboard3Line,
  RiMessage3Line,
  RiRegisteredLine,
  RiLoginBoxLine,
} from "react-icons/ri";

const Header = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [auth, setAuth] = useState(true);

  const username = "Lorenzo Marques";
  const userImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg";

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
      setNavVisibility(false);
    } else {
      setIsSmallScreen(false);
      setNavVisibility(true);
    }
  };

  return (
    <HeaderContainer id="5">
      {auth && (
        <User>
          <Img src={userImage} alt="user" />
          <div>
            <h3>{username}</h3>
            <button>Edit profile</button>
          </div>
        </User>
      )}

      {isSmallScreen && (
        <NavToggle onClick={toggleNav}>
          <MdLegendToggle color="white" size="35" />
        </NavToggle>
      )}
      {isNavVisible && (
        <Nav>
          {!isSmallScreen && <Line></Line>}
          {auth ? (
            <>
              <div className="link">
                <MdViewModule size="25" color="white" />
                <Link to="/overview">OverView</Link>
              </div>
              <div className="link">
                <TbNews size="25" color="white" />
                <Link to="/news">News</Link>
              </div>
              <div className="link">
                <RiPlayListFill size="25" color="white" />
                <Link to="/playlists">PlayList</Link>
              </div>{" "}
              <div className="link">
                <RiCompassDiscoverLine size="25" color="white" />
                <Link to="/discover">Discover</Link>
              </div>
              <Div></Div>
              <div className="link">
                <RiDashboard3Line size="25" color="white" />
                <Link to="/:profile/albums">Profile</Link>
              </div>{" "}
              <div className="link">
                <RiMessage3Line size="25" color="white" />
                <Link to="/messeges">Messeges</Link>
              </div>{" "}
              <div className="link">
                <MdNotificationsNone size="25" color="white" />
                <Link to="/notifications">Notifications</Link>
              </div>{" "}
              <div className="link">
                <MdOutlineAccountCircle size="25" color="white" />
                <Link to="/acoount">Account</Link>
              </div>
            </>
          ) : (
            <Unauthorized>
              <div className="link">
                <RiLoginBoxLine size="25" color="white" />
                <Link to="/">Login</Link>
              </div>

              <div className="link">
                <RiRegisteredLine size="25" color="white" />
                <Link to="/register">Register</Link>
              </div>
            </Unauthorized>
          )}
        </Nav>
      )}
    </HeaderContainer>
  );
};

export default Header;
