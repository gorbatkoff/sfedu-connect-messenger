import classNames from "classnames";

import { IMessage } from "@/entities/Message/model/types/message";

import styles from "./Message.module.scss";

interface IMessageProps {
  message: IMessage;
  className?: string;
  isMessageOfCurrentUser: boolean;
}

export const Message = (props: IMessageProps) => {
  const { message, className, isMessageOfCurrentUser } = props;

  const mods = {
    [styles["userMessage"]]: isMessageOfCurrentUser,
  };

  return (
    <div className={classNames(styles.message, [mods, className])}>
      {message.text}
    </div>
  );
};
