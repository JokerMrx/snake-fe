import { IButtonProps } from "../buttons.types";
import { getClassStyles } from "../../../../utils/styles.utils";

import styles from "./Button.module.css";

const Button = ({ variant = "default", onClick, children }: IButtonProps) => {
  return (
    <button
      className={`${styles.button} ${getClassStyles(variant, styles)}`}
      onClick={onClick}
    >
      <>{children}</>
    </button>
  );
};

export default Button;
