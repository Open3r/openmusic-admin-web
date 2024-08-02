import { IUser } from "./User";

export type Genre = "POP" | "HIPHOP" | "RNB" | "INDIE" | "ELECTRONIC" | "ROCK" | "METAL" | "CLASSIC" | "JAZZ" | "BLUES" | "COUNTRY" | "FOLK" | "PUNK" | "REGGAE" | "DANCE" | "DISCO" | "LATIN" | "KPOP" | "ANIME" | "OST" | "ETC";

export interface ISong {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
    likeCount: number;
    genre: string;
    scope: string;
    artist: IUser;
    lyrics: ILyrics[];
    album: ISongAlbum;
    createdAt: number[];
    updatedAt: number[];
}

interface ILyrics {
    lyrics: string;
    timestamp: number;
}

interface ISongAlbum {
    id: number;
    title: string;
    description: string;
    coverUrl: string;
    artist: IUser;
}