import { IId } from "./types";

export interface IUser extends IId {
  email: string;
  nickname: string;
}
