import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BannerList from "./pages/BannerList";
import NewBanner from "./pages/NewBanner";
import {useEffect} from "react";
import axios from "axios";
import UserList from "./pages/UserList";
import SongList from "./pages/SongList";
import PlaylistList from "./pages/PlaylistList";
import AlbumList from "./pages/AlbumList";
import DeletedSongList from "./pages/DeletedSongList";
import PendingReportList from "./pages/PendingReportList";
import ApprovedReportList from "./pages/ApprovedReportList";
import RejectedReportList from "./pages/RejectedReportList";
import Logout from "./pages/Logout";

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
                data: {data},
            } = await axios.get(`${import.meta.env.VITE_API_URL}/users/me`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            if (data.role !== "ADMIN") {
                alert("어드민 계정으로 로그인 해주세요.")
                navigate("/login");
            }
        } catch (e) {
            if (axios.isAxiosError(e)) {
                if (e.status === 502) {
                    alert("서버가 꺼져있습니다.")
                }
            }

            navigate("/login");
        }
    };

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/banners" element={<BannerList/>}/>
                <Route path="/banners/new" element={<NewBanner/>}/>

                <Route path="/albums" element={<AlbumList/>}/>

                <Route path="/playlists" element={<PlaylistList/>}/>

                <Route path="/users" element={<UserList/>}/>

                <Route path="/songs" element={<SongList/>}/>
                <Route path="/songs/deleted" element={<DeletedSongList/>}/>

                <Route path="/reports/pending" element={<PendingReportList/>}/>
                <Route path="/reports/approved" element={<ApprovedReportList/>}/>
                <Route path="/reports/rejected" element={<RejectedReportList/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
        </Routes>
    );
}

export default App;