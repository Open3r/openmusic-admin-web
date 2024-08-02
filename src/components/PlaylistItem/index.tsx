import { IPlaylist } from "../../interfaces/Playlist";

interface PlaylistItemProps {
  playlist: IPlaylist;
}

const PlaylistItem = ({ playlist }: PlaylistItemProps) => {
  return <div>{playlist.title}</div>;
};

export default PlaylistItem;
