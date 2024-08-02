import { Genre } from "./Song";

export interface IUser {
    id: number;
    nickname: string;
    email: string;
    provider: string;
    avatarUrl: string,
    role: string,
    status: string,
    genres: Genre[],
    createdAt: number[],
    updatedAt: number[],
}