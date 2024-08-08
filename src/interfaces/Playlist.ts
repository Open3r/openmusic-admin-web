import {ISong} from "./Song";

export interface IPlaylist {
    id: number;
    title: string;
    coverUrl: string;
    scope: string;
    createdAt: string;
    updatedAt: string;
    Songs: ISong[];
}