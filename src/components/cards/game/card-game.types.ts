import { IId } from "../../../types/types";

export interface ICardGameProps extends IId {
  name: string;
  description?: string;
  image?: string;
  rating: number;
}
