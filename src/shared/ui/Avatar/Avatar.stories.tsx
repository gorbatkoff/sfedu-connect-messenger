import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, IAvatarProps } from "./Avatar";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: IAvatarProps) => <Avatar {...args} />;
Default.args = {
  alt: "Avatar",
  avatarUrl: "https://www.wonderslate.com/assets/wonderslate/avatar.webp",
  size: "md",
};

export const VerySmallSize: Story = (args: IAvatarProps) => (
  <Avatar {...args} />
);
VerySmallSize.args = {
  alt: "Avatar",
  size: "xs",
  avatarUrl:
    "https://cdn0.iconfinder.com/data/icons/user-pictures/100/boy-2-1024.png",
};

export const SmallSize: Story = (args: IAvatarProps) => <Avatar {...args} />;
SmallSize.args = {
  alt: "Avatar",
  size: "sm",
  avatarUrl:
    "https://cdn0.iconfinder.com/data/icons/user-pictures/100/boy-2-1024.png",
};

export const MediumSize: Story = (args: IAvatarProps) => <Avatar {...args} />;
MediumSize.args = {
  alt: "Avatar",
  size: "md",
  avatarUrl:
    "https://cdn0.iconfinder.com/data/icons/user-pictures/100/boy-2-1024.png",
};

export const LargeSize: Story = (args: IAvatarProps) => <Avatar {...args} />;
LargeSize.args = {
  alt: "Avatar",
  size: "lg",
  avatarUrl:
    "https://cdn0.iconfinder.com/data/icons/user-pictures/100/boy-2-1024.png",
};
