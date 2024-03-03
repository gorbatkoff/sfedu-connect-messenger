import { FC } from "react";

import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userLoginService } from "@/features/Authorization";

import styles from "./LoginForm.module.scss";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const dispatch = useDispatch();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    //@ts-ignore
    await dispatch(userLoginService({ username: "admin", password: "123" }));
  };

  return (
    <form className={classNames(styles.loginPage, className)}>
      <input type="email" className={styles.input} placeholder="Email" />
      <input type="password" className={styles.input} placeholder="Пароль" />
      <button className={styles.button} onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};
