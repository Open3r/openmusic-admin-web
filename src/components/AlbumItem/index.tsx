import {IAlbum} from "../../interfaces/Album";
import {AlbumImage, AlbumTitle, Container} from "./style";

interface AlbumItemProps {
    album: IAlbum;
}

const AlbumItem = ({album}: AlbumItemProps) => {
    return (
        <Container>
            <AlbumImage src={album.coverUrl} alt={album.title}/>
            <AlbumTitle to={`https://openmusic.kr/album/${album.id}`}>{album.title}</AlbumTitle>
        </Container>
    );
};

export default AlbumItem;
