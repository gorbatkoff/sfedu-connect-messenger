import React, { FC } from "react";

import { Collapse, CollapseProps } from "antd";

import { Channel } from "@/shared/ui/Channel/Channel";
import { TChannelType } from "@/shared/ui/Channel/types";

import styles from "./Channels.module.scss";

interface IChannel {
  title: string;
  type: TChannelType;
  id: string;
}

const mockData: IChannel[] = [
  { title: "Главная", type: "Public", id: "general" },
  { title: "Ктбо4-9", type: "Public", id: "ktbo-office" },
  { title: "1-ый Курс", type: "Private", id: "first-course" },
  { title: "Барковский АИП", type: "Private", id: "barkovskiy-aip" },
];

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Каналы",
    children: (
      <>
        {mockData.map((channel, index) => {
          return (
            <Channel
              key={`${channel.title}-${index}`}
              channelName={channel.title}
              channelType={channel.type}
              channelId={channel.id}
            />
          );
        })}
      </>
    ),
  },
];

export const Channels: FC = () => (
  <Collapse
    defaultActiveKey={["1"]}
    ghost
    items={items}
    className={styles.channel}
  />
);
