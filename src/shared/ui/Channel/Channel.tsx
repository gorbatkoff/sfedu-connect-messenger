import { CSSProperties, useCallback } from "react";

import {
  LockOutlined,
  NumberOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./Channel.module.scss";
import { TChannelType } from "./types";

export interface ChannelProps {
  className?: string;
  channelName: string;
  channelType: TChannelType;
  channelId: string;
}

export const Channel = (props: ChannelProps) => {
  const { className, channelName, channelType, channelId } = props;

  const navigate = useNavigate();

  const calculateChannelIcon = useCallback((channelType: TChannelType) => {
    const style: CSSProperties = { fontSize: "18px" };

    if (channelType === "Public") return <NumberOutlined style={style} />;
    if (channelType === "Private") return <LockOutlined style={style} />;
    if (channelType === "Add") return <PlusCircleFilled />;
  }, []);

  const handleChannelClick = () => {
    navigate(`/channel/${channelId}`);
  };

  return (
    <button
      aria-pressed="true"
      className={classNames(styles.channel, {}, [className])}
      onClick={handleChannelClick}
    >
      <span className={styles.channelLogo}>
        {calculateChannelIcon(channelType)}
      </span>
      <span className={styles.channelName}>{channelName}</span>
    </button>
  );
};
