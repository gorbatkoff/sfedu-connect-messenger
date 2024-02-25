import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import styles from "./Button.module.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = (props) => {
  const { children } = props;

  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
