import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = (props) => {
  const { children } = props;

  return <button {...props}>{children}</button>;
};
