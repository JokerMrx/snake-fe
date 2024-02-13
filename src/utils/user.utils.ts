import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { IUser } from "../types/user.types";
import { redirectToHomePage } from "./page.utils";

const TOKEN_KEY = "_token";

export const setUserToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token);
};

export const getUserToken = () => Cookies.get(TOKEN_KEY);

export const removeUserToken = () => Cookies.remove(TOKEN_KEY);

export const getUserDataFromUserToken = (): IUser | null => {
  const token = getUserToken();

  if (!token) return null;

  try {
    const userData = jwtDecode<IUser>(token);

    return userData;
  } catch (error) {
    return null;
  }
};

export const logout = () => {
  removeUserToken();

  redirectToHomePage();
};
