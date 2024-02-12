import { useState } from "react";

import AuthLayoutPage from "../../components/layout/AuthLayoutPage";
import AuthForm from "../../components/auth/AuthForm";

import { IAuthForm } from "../../types/auth.types";
import { register } from "../../services/api/auth.api";
import AlertSolid from "../../components/alert/AlertSolid";
import { setUserToken } from "../../utils/user.utils";
import { NOTIFICATION_DURATION } from "../../constants";

const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (formData: IAuthForm) => {
    return await register(formData).then(res => {
      if (res.status === 201) {
        const { token } = res.data;

        setUserToken(token);
        return true;
      }

      setErrorMessage(res?.response?.data?.message ?? "Error!");
      setTimeout(() => setErrorMessage(""), NOTIFICATION_DURATION);

      return false;
    });
  };

  const handleCloseAlert = () => {
    setErrorMessage("");
  };

  return (
    <AuthLayoutPage>
      <AuthForm formType="register" onSubmit={onSubmit} />
      {errorMessage && (
        <AlertSolid
          variant="error"
          message={errorMessage}
          onClose={handleCloseAlert}
        />
      )}
    </AuthLayoutPage>
  );
};

export default RegisterPage;
