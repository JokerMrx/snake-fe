import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";

import { IAuthForm } from "../../types/auth.types";
import { isValidAuthFormData } from "../../utils/form.utils";

interface IAuthFormProps {
  formType: "login" | "register";
  onSubmit: (value: IAuthForm) => Promise<boolean>;
}

const LOGIN = "login";

const AuthForm: FC<IAuthFormProps> = ({ formType, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleClickSubmit = async () => {
    const { isValid, errorMessage } = isValidAuthFormData(formData);

    if (!isValid) {
      setError(errorMessage);
      return;
    }

    setError("");
    const isSuccess = await onSubmit(formData).then(res => res);

    if (isSuccess) {
      setFormData({ email: "", password: "" });
      window.location.href = "/";
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <form action="">
        <div className="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px dark:from-zinc-800 dark:to-transparent">
          <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-zinc-900">
            <div>
              <h1 className="text-xl font-semibold text-zinc-800 dark:text-white">
                {formType === LOGIN
                  ? "Login to your account"
                  : "Register a account"}
              </h1>
              <p className="text-sm tracking-wide text-zinc-600 dark:text-zinc-300">
                {formType !== LOGIN ? (
                  <>
                    You have an account?{" "}
                    <Link
                      to="/login"
                      className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400"
                    >
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400"
                    >
                      Register
                    </Link>
                  </>
                )}
              </p>
            </div>

            <div className="mt-8 space-y-8">
              <div className="space-y-6">
                <input
                  className="w-full bg-transparent text-zinc-600 dark:text-white dark:border-zinc-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-zinc-600 invalid:border-red-500 dark:placeholder-zinc-300"
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                />
                <input
                  className="w-full bg-transparent text-zinc-600 dark:text-white dark:border-zinc-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-zinc-600 invalid:border-red-500 dark:placeholder-zinc-300"
                  placeholder="Your Password"
                  type="password"
                  name="password"
                  id="password"
                  minLength={8}
                  onChange={handleChange}
                  value={formData.password}
                />
                <span className="text-sm text-red-600">{error || ""}</span>
              </div>

              <button
                className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white"
                type="button"
                onClick={handleClickSubmit}
              >
                {formType === LOGIN ? "Login" : "Register"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
