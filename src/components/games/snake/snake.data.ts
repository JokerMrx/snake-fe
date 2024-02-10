import { SNAKE_GAME } from "../../../data/games.data";

export const INITIAL_SNAKE_POSITION = [
  {
    x: SNAKE_GAME.PLAYING_FIELD_SIZE / 2,
    y: SNAKE_GAME.PLAYING_FIELD_SIZE / 2
  },
  {
    x: SNAKE_GAME.PLAYING_FIELD_SIZE / 2 + 1,
    y: SNAKE_GAME.PLAYING_FIELD_SIZE / 2
  }
];

export const TIME_UPDATE_GAME: number = 0.5 * 1000;

export const QUANTITY_SCORE_FOOD = {
  APPLE: 1,
  PEAR: 5,
  WATERMELON: 10
};

export enum FOOD {
  APPLE = "apple",
  PEAR = "pear",
  WATERMELON = "watermelon"
}

export const MAX_SNAKE_SPEED = 50;
export const SPEED_INCREMENT_THRESHOLD = 50;
export const CHANGE_SNAKE_SPEED = 50;
