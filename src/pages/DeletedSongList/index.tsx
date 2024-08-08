import {useEffect, useState} from 'react';
import {ISong} from "../../interfaces/Song.ts";
import axios from "axios";
import {Container, DeletedSongWrapper, Title} from "./style.ts";
import DeletedSongItem from "../../components/DeletedSongItem";

const DeletedSongList = () => {
    const [deletedSongs, setDeletedSongs] = useState<ISong[]>([]);

    useEffect(() => {
        fetchDeletedSongs();
    }, []);

    const fetchDeletedSongs = async () => {
        try {
            const {
                data: {data},
            } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/songs/deleted`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            setDeletedSongs(data);
        } catch (e) {
            alert("삭제된 노래를 불러오는데 실패했습니다.");
        }
    }

    return (
        <Container>
            <Title>삭제된 노래들</Title>

            {deletedSongs.length === 0 ? (
                <p>삭제된 노래가 없습니다.</p>
            ) : (
                <DeletedSongWrapper>
                    {deletedSongs.map((song, i) => (
                        <DeletedSongItem key={i} song={song}/>
                    ))}
                </DeletedSongWrapper>
            )}
        </Container>
    );
};

export default DeletedSongList;