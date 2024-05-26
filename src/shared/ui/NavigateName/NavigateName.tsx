import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./NavigateName.module.scss";

type TNavigateTo = "profile" | "chat";

interface INavigateNameProps {
  name?: string;
  surname?: string;
  username?: string;
  isCurrentUser: boolean;
  navigateId: string;
  navigateTo?: TNavigateTo;
}

export const NavigateName = (props: INavigateNameProps) => {
  const {
    surname,
    name,
    username,
    isCurrentUser,
    navigateId,
    navigateTo = "profile",
  } = props;
  const navigate = useNavigate();

  const mods = {
    [styles["isCurrentUser"]]: isCurrentUser,
  };

  const nameForRender = username ? username : `${name} ${surname}`;

  const handleNavigate = () => {
    navigate(`/${navigateTo}/${navigateId}`);
  };

  return (
    <span
      className={classNames(styles.navigateName, [mods])}
      onClick={handleNavigate}
    >
      @{nameForRender}
    </span>
  );
};
