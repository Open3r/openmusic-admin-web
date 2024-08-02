import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BannerList from "./pages/BannerList";
import NewBanner from "./pages/NewBanner";
import { useEffect } from "react";
import axios from "axios";
import UserList from "./pages/UserList";
import SongList from "./pages/SongList";
import PlaylistList from "./pages/PlaylistList";
import AlbumList from "./pages/AlbumList";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
      return;
    }
    getMe();
  }, [location.pathname]);

  const getMe = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`${import.meta.env.VITE_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (data.role !== "ADMIN") {
        navigate("/login");
      }
    } catch (e) {
      navigate("/login");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/banners" element={<BannerList />} />
        <Route path="/banners/new" element={<NewBanner />} />

        <Route path="/albums" element={<AlbumList />} />

        <Route path="/playlists" element={<PlaylistList />} />

        <Route path="/users" element={<UserList />} />

        <Route path="/songs" element={<SongList />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
