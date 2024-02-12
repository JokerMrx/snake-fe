import { Link } from "react-router-dom";

import NavLinkButton from "../ui/buttons/nav-link-button/NavLinkButton";
import { getUserDataFromUserToken, logout } from "../../utils/user.utils";

import Logo from "../../assets/icons/logo.svg?react";
import LogoutIcon from "../../assets/icons/logout.svg?react";

const Navbar = () => {
  const userData = getUserDataFromUserToken();

  return (
    <header className="max-w-screen-xl max-h-[90px] w-full h-full py-3 px-5 flex justify-between border-b-[1px] border-neutral-400">
      <div className="flex items-center">
        <Link to="/">
          <Logo className="w-[48px] h-[48px]" />
        </Link>
        <h2 className="ml-4 text-xl">IDN Games</h2>
        <nav className="ml-5">
          <ul>
            <li className="border-solid border-zinc-800 dark:border-zinc-100 hover:border-b-[1px]">
              <Link to="/games/holders">Holders</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-2">
        {userData ? (
          <>
            <div>
              <p>Email: {userData.email}</p>
              <p>Nickname: {userData.nickname}</p>
            </div>
            <button className="ml-5" onClick={logout}>
              <LogoutIcon className="w-8 h-8 stroke-zinc-800 fill-zinc-800 dark:stroke-zinc-100 dark:fill-zinc-100 " />
            </button>
          </>
        ) : (
          <>
            <NavLinkButton toLink="/login">Login</NavLinkButton>
            <NavLinkButton toLink="/register" variant="primary">
              Register
            </NavLinkButton>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
