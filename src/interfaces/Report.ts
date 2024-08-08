import {IUser} from "./User.ts";

export interface IReport {
    id: number;
    title: string;
    description: string;
    createdAt: number[];
    updatedAt: number[];
    user: IUser
}