import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import classNames from "classnames";

import { NavigateName } from "@/shared/ui/NavigateName/NavigateName";

import styles from "./DirectMessage.module.scss";

interface IDirectMessageProps {
  name: string;
  surname: string;
  handleClick?: () => void;
  className?: string;
}

export const DirectMessage = (props: IDirectMessageProps) => {
  const { name, surname, handleClick, className } = props;

  return (
    <button
      onClick={handleClick}
      className={classNames(styles.directMessage, [className])}
    >
      <Avatar
        style={{ backgroundColor: "gray" }}
        icon={<UserOutlined />}
        className={styles.avatar}
        size="small"
      />
      <span className={styles.name}>
        {name} {surname}
      </span>
    </button>
  );
};
