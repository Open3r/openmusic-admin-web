import { ISong } from "../../interfaces/Song";

interface SongItemProps {
  song: ISong;
}

const SongItem = ({ song }: SongItemProps) => {
  return (
    <div>
      <h1>{song.title}</h1>
      <p>{song.genre}</p>
      <p>{song.artist.nickname}</p>
    </div>
  );
};

export default SongItem;
