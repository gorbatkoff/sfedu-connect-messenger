import { FC } from "react";

import classNames from "classnames";

import { userLoginService } from "@/features/Authorization";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

import styles from "./LoginForm.module.scss";

interface ILoginFormProps {
  className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
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
