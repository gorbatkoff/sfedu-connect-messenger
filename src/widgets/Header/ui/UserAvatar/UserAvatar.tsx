import { useCallback, useMemo } from "react";

import { FullscreenExitOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { User, userActions } from "@/entities/User";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { deleteAllCookies } from "@/shared/lib/deleteAllCookies/deleteAllCookies";

interface IUserAvatar {
  className?: string;
  userData?: User;
}

export const UserAvatar = (props: IUserAvatar) => {
  const { userData, className } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log("userData :>>", userData);

  const handleLogout = useCallback(() => {
    dispatch(userActions.removeAuthData());
    localStorage.clear();
    deleteAllCookies();
    navigate("/login");
  }, [dispatch, navigate]);

  const items: MenuProps["items"] = useMemo(
    () => [
      {
        key: "1",
        label: <Link to="/profile">Профиль</Link>,
        icon: <UserOutlined />,
      },
      {
        key: "2",
        danger: true,
        label: <Button onClick={handleLogout}>Выход из аккаунта</Button>,
        icon: <FullscreenExitOutlined />,
      },
    ],
    [handleLogout]
  );

  return (
    <Dropdown menu={{ items }} className={className} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Avatar
          style={{ backgroundColor: "gray" }}
          src={userData?.avatar}
          shape="square"
          size="large"
          icon={<UserOutlined />}
        />
        <span style={{ marginLeft: "1em" }}>
          {userData?.name} {userData?.surname}
        </span>
      </a>
    </Dropdown>
  );
};
