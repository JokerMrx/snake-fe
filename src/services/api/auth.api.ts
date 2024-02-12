import { axios } from "../../utils/axios";

import { IAuthForm } from "../../types/auth.types";

const REGISTER = "/register",
  LOGIN = "/login";

export const register = async (formData: IAuthForm) => {
  return await axios
    .post<IAuthForm>(REGISTER, formData)
    .then(res => res)
    .catch(err => err);
};

export const login = async (formData: IAuthForm) => {
  return await axios
    .post<IAuthForm>(LOGIN, formData)
    .then(res => res)
    .catch(err => err);
};
