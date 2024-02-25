import { FC } from "react";

import classNames from "classnames";

import { OnlineIndicatorType, OnlineIndicatorTypeSize } from "../Avatar";
import styles from "./OnlineIndicator.module.scss";

interface IOnlineIndicator {
  onlineIndicator: OnlineIndicatorType;
  onlineIndicatorSize: OnlineIndicatorTypeSize;
  className?: string;
}

export const OnlineIndicator: FC<IOnlineIndicator> = ({
  onlineIndicatorSize,
  className,
}) => <div className={classNames(className, styles[onlineIndicatorSize])} />;
