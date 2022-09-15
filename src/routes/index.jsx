import { Route, Routes } from "react-router-dom";

import OverView from "../pages/overView";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ProfilePage from "../pages/profile";
import Player from "../pages/player";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/overview" element={<OverView />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile/:route" pa element={<ProfilePage />} />
      <Route path="/player/:id" pa element={<Player />} />
    </Routes>
  );
};

export default AppRoutes;
