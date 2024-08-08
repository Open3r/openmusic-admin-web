import {useEffect, useState} from "react";
import {Container, PlaylistWrapper} from "./style";
import {IPlaylist} from "../../interfaces/Playlist";
import axios from "axios";
import PlaylistItem from "../../components/PlaylistItem";

const PlaylistList = () => {
    const [playlists, setPlaylists] = useState<IPlaylist[]>([]);

    useEffect(() => {
        fetchPlaylists();
    }, []);

    const fetchPlaylists = async () => {
        try {
            const {
                data: {data},
            } = await axios.get(`${import.meta.env.VITE_API_URL}/playlists`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                params: {
                    page: 0,
                    size: 1000,
                },
            });

            setPlaylists(data.content);
        } catch (e) {
            alert("플레이리스트를 불러오는데 실패했습니다.");
        }
    };

    return (
        <Container>
            <h1>플레이리스트</h1>

            {playlists.length === 0 ? (
                <p>플레이리스트가 없습니다.</p>
            ) : (
                <PlaylistWrapper>
                    {playlists.map((playlist, i) => (
                        <PlaylistItem key={i} playlist={playlist}/>
                    ))}
                </PlaylistWrapper>
            )}
        </Container>
    );
};

export default PlaylistList;
