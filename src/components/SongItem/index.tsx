import {ISong} from "../../interfaces/Song";
import {Container, DeleteButton, SongImage, SongTitle} from "./style.ts";
import axios from "axios";

interface SongItemProps {
    song: ISong;
}

const SongItem = ({song}: SongItemProps) => {
    const deleteSong = async () => {
        const confirm = window.confirm("정말 삭제하시겠습니까?");
        if (!confirm) {
            return;
        }
        try {
            await axios.delete(
                `${import.meta.env.VITE_API_URL}/admin/songs/${song.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                }
            );
            window.location.reload();
        } catch (e) {
            console.error(e);
            alert("노래 삭제에 실패했습니다.");
        }
    }

    return (
        <Container>
            <SongImage src={song.thumbnailUrl} alt={song.title}/>
            <SongTitle to={`https://openmusic.kr/song/${song.id}`}>{song.title}</SongTitle>
            <DeleteButton onClick={deleteSong}>삭제</DeleteButton>
        </Container>
    );
};

export default SongItem;
