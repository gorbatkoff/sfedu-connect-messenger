import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import { NavigateName } from "@/shared/ui/NavigateName/NavigateName";

import styles from "./DirectMessage.module.scss";

interface IDirectMessageProps {
  name: string;
  surname: string;
  handleClick?: () => void;
}

export const DirectMessage = (props: IDirectMessageProps) => {
  const { name, surname, handleClick } = props;

  return (
    <button onClick={handleClick} className={styles.directMessage}>
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
