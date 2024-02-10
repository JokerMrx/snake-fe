import { Link } from "react-router-dom";

import Button from "../ui/buttons/button/Button";

import Logo from "../../assets/icons/logo.svg?react";

const Navbar = () => {
  return (
    <header className="max-w-screen-xl max-h-[90px] w-full h-full py-3 px-5 flex justify-between border-b-[1px] border-neutral-400">
      <div className="flex items-center">
        <Link to="/">
          <Logo className="w-[48px] h-[48px]" />
        </Link>
        <h2 className="ml-4 text-xl">IDN Games</h2>
      </div>
      <div className="flex gap-2">
        <Button>Login</Button>
        <Button variant="primary">Register</Button>
      </div>
    </header>
  );
};

export default Navbar;
