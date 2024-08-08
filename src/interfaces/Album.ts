import {IUser} from "./User";

export interface IAlbum {
    id: number;
    title: string;
    coverUrl: string;
    artist: IUser;
}