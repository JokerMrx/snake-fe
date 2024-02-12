import { ISaveGameResult } from "../../types/game.types";
import { axios } from "../../utils/axios";

const GAMES = "/games";

export const saveGameResult = async (gameData: ISaveGameResult) => {
  return await axios
    .post(`${GAMES}/game-result`, gameData)
    .then(res => res)
    .catch(err => err);
};

export const getHoldersGameResult = async (game_name: string) => {
  return await axios
    .get(`${GAMES}/holders?game_name=${game_name}`)
    .then(res => res)
    .catch(err => err);
};
