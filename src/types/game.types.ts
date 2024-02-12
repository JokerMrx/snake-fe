import { IId } from "./types";
import { IUser } from "./user.types";

export interface IGameResult extends IId {
  score: number;
  game_name: string;
  user: IUser;
}

export interface ISaveGameResult {
  score: number;
  game_name: string;
}
