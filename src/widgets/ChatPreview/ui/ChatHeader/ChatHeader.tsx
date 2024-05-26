import { memo } from "react";

import classNames from "classnames";
import { useSelector } from "react-redux";

import { getUserAuthData } from "@/entities/User";

import { NavigateName } from "@/shared/ui/NavigateName/NavigateName";

import styles from "./ChatHeader.module.scss";

interface IChatHeaderProps {
  className?: string;
  recipient: any;
}

// eslint-disable-next-line react/display-name
export const ChatHeader = ({ className, recipient }: IChatHeaderProps) => {
  const user = useSelector(getUserAuthData);

  if (!recipient) return null;

  return (
    <div className={classNames(styles.chatHeader, {}, [className])}>
      <h2>
        Переписка между вами и{" "}
        <NavigateName
          name={recipient.name}
          surname={recipient.surname}
          isCurrentUser={user?._id === recipient._id}
          navigateId={recipient._id}
          navigateTo="profile"
        />
      </h2>
    </div>
  );
};
