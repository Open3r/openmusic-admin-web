import { useEffect, useState } from "react";
import { Container, SongWrapper } from "./style";
import { ISong } from "../../interfaces/Song";
import axios from "axios";
import SongItem from "../../components/SongItem";

const SongList = () => {
  const [songs, setSongs] = useState<ISong[]>([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`${import.meta.env.VITE_API_URL}/songs`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        params: {
          size: 1000,
          page: 0,
        },
      });

      setSongs(data.content);
    } catch (e) {
      alert("노래를 불러오는데 실패했습니다.");
    }
  };

  return (
    <Container>
      <h1>노래</h1>

      {songs.length === 0 ? (
        <p>노래가 없습니다.</p>
      ) : (
        <SongWrapper>
          {songs.map((song, i) => (
            <SongItem key={i} song={song} />
          ))}
        </SongWrapper>
      )}
    </Container>
  );
};

export default SongList;
