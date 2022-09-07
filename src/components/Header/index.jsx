import { useEffect, useState } from "react";
import { HeaderContainer, Img, User, Nav, Div, NavToggle, Line } from "./style";
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
} from "react-icons/ri";

const Header = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const username = "Lorenzo Marques";
  const userImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg";

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
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
    <HeaderContainer>
      <User>
        <Img src={userImage} alt="user" />
        <div>
          <h3>{username}</h3>
          <button>Edit profile</button>
        </div>
      </User>
      {isSmallScreen && (
        <NavToggle onClick={toggleNav}>
          <MdLegendToggle color="white" size="35" />
        </NavToggle>
      )}
      {isNavVisible && (
        <Nav>
          {!isSmallScreen && <Line></Line>}
          <div className="link">
            <MdViewModule size="25" color="white" />
            <a href="#">OverView</a>
          </div>
          <div className="link">
            <TbNews size="25" color="white" />
            <a href="#">News</a>
          </div>
          <div className="link">
            <RiPlayListFill size="25" color="white" />
            <a href="#">PlayList</a>
          </div>{" "}
          <div className="link">
            <RiCompassDiscoverLine size="25" color="white" />
            <a href="#">Discover</a>
          </div>
          <Div></Div>
          <div className="link">
            <RiDashboard3Line size="25" color="white" />
            <a href="#">Dashboard</a>
          </div>{" "}
          <div className="link">
            <RiMessage3Line size="25" color="white" />
            <a href="#">Messeges</a>
          </div>{" "}
          <div className="link">
            <MdNotificationsNone size="25" color="white" />
            <a href="#">Notification</a>
          </div>{" "}
          <div className="link">
            <MdOutlineAccountCircle size="25" color="white" />
            <a href="#">Account</a>
          </div>
        </Nav>
      )}
    </HeaderContainer>
  );
};

export default Header;
