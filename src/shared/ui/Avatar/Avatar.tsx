import { ButtonHTMLAttributes, FC } from "react";

import classNames from "classnames";

import styles from "./Avatar.module.scss";
import { OnlineIndicator } from "./OnlineIndicator/OnlineIndicator";

type AvatarSize = "xs" | "sm" | "md" | "lg";
export type OnlineIndicatorTypeSize = AvatarSize;
export type OnlineIndicatorType = "online" | "away" | "dontDisturb" | "offline";

export interface IAvatarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  alt?: string;
  className?: string;
  avatarUrl?: string;
  handleClick?: () => void;
  size?: AvatarSize;
  showOnlineIndicator?: boolean;
  onlineIndicator?: OnlineIndicatorType;
}

export const Avatar: FC<IAvatarProps> = ({
  className,
  avatarUrl,
  handleClick,
  alt = "Avatar",
  size = "sm",
  showOnlineIndicator = true,
  onlineIndicator = "offline",
  ...props
}) => {
  return (
    <button
      className={classNames(styles.avatar, [className, styles[size]])}
      onClick={handleClick}
      {...props}
    >
      <img src={avatarUrl} alt={alt} className={styles.avatarImage} />
      {showOnlineIndicator && (
        <OnlineIndicator
          className={styles.onlineIndicator}
          onlineIndicator={onlineIndicator}
          onlineIndicatorSize={size}
        />
      )}
    </button>
  );
};
