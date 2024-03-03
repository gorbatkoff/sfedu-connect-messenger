import { FC } from "react";

import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./LoginForm.module.scss";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <form className={classNames(styles.loginPage, className)}>
      <input type="email" className={styles.input} placeholder="Email" />
      <input type="password" className={styles.input} placeholder="Пароль" />
      <button className={styles.button} onClick={() => navigate("/profile")}>
        Login
      </button>
    </form>
  );
};
