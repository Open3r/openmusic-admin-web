import {Container, SongImage, SongTitle} from "./style.ts";
import {ISong} from "../../interfaces/Song.ts";

interface DeletedSongItemProps {
    song: ISong;
}

const DeletedSongItem = ({song}: DeletedSongItemProps) => {
    return (
        <Container>
            <SongImage src={song.thumbnailUrl} alt={song.title}/>
            <SongTitle>{song.title}</SongTitle>
        </Container>
    );
};

export default DeletedSongItem;