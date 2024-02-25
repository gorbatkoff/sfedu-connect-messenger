import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import classNames from "classnames";

import styles from "./Button.module.scss";

type ButtonTheme = "primary" | "secondary";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonTheme;
  className?: string;
}

export const Button: FC<IButtonProps> = (props) => {
  const { children, variant = "primary", className } = props;

  return (
    <button
      className={classNames(styles.button, styles[variant], [className])}
      {...props}
    >
      {children}
    </button>
  );
};
