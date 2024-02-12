import { FC } from "react";
import { Link } from "react-router-dom";
import { INavLinkButton } from "../buttons.types";

import { getClassStyles } from "../../../../utils/styles.utils";

import styles from "../button/Button.module.css";

const NavLinkButton: FC<INavLinkButton> = ({
  children,
  toLink,
  variant = "default"
}) => {
  return (
    <Link
      className={`${styles.button} ${getClassStyles(
        variant,
        styles
      )} flex items-center`}
      to={toLink}
    >
      <>{children}</>
    </Link>
  );
};

export default NavLinkButton;
