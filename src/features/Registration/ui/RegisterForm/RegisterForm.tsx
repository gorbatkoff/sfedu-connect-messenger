import { FC } from "react";

import classNames from "classnames";

import styles from "./RegisterForm.module.scss";

interface IRegisterFormProps {
  className?: string;
}

export const RegisterForm: FC<IRegisterFormProps> = ({ className }) => {
  const handleRegister = () => {};

  return (
    <form className={classNames(styles.loginPage, className)}>
      <input type="text" className={styles.input} placeholder="Username" />
      <input type="email" className={styles.input} placeholder="Email" />
      <input type="password" className={styles.input} placeholder="Пароль" />
      <input type="number" className={styles.input} placeholder="Возраст" />
      <input
        type="url"
        className={styles.input}
        placeholder="Ссылка на аватар"
      />
      <button className={styles.button} onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};
