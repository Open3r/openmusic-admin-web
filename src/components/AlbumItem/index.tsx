import { IAlbum } from "../../interfaces/Album";
import { Container } from "./style";

interface AlbumItemProps {
  album: IAlbum;
}

const AlbumItem = ({ album }: AlbumItemProps) => {
  return (
    <Container>
      <img src={album.coverUrl} alt={album.title} />
      <p>{album.title}</p>
    </Container>
  );
};

export default AlbumItem;
