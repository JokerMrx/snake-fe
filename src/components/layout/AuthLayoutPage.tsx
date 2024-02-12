import { ReactNode } from "react";
import { Link } from "react-router-dom";

import ArrowLeftIcon from "../../assets/icons/arrow-left.svg?react";

const AuthLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Link to="/">
        <ArrowLeftIcon className="absolute top-5 left-5 stroke-zinc-800 dark:stroke-zinc-100" />
      </Link>
      {children}
    </>
  );
};

export default AuthLayoutPage;
