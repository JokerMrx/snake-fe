import { IAuthForm } from "../types/auth.types";

export const isValidAuthFormData = (formData: IAuthForm) => {
  const isValidEmail = /^[\w\-\\.]+@([\w-]+\.)+[\w-]{2,}$/.test(formData.email);
  const isValidPassword = formData.password.length >= 8;

  if (!isValidEmail) {
    return { isValid: isValidEmail, errorMessage: "The email is not valid!" };
  }

  if (!isValidPassword) {
    return {
      isValid: isValidPassword,
      errorMessage: "The password must be more than 8 characters!"
    };
  }

  return { isValid: true, errorMessage: "" };
};
