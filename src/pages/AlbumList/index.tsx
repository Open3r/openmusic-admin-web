import { useEffect, useState } from "react";
import { IAlbum } from "../../interfaces/Album";
import axios from "axios";
import { AlbumWrapper, Container } from "./style";

const AlbumList = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`${import.meta.env.VITE_API_URL}/albums`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        params: {
          size: 1000,
          page: 0,
        },
      });

      setAlbums(data.content);
    } catch (e) {
      alert("앨범을 불러오는데 실패했습니다.");
    }
  };

  return (
    <Container>
      <h1>앨범</h1>

      {albums.length === 0 ? (
        <p>앨범이 없습니다.</p>
      ) : (
        <AlbumWrapper>
          {albums.map((album, i) => (
            <div key={i}>
              <img src={album.coverUrl} alt={album.title} />
              <p>{album.title}</p>
            </div>
          ))}
        </AlbumWrapper>
      )}
    </Container>
  );
};

export default AlbumList;
