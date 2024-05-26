import { FC, ReactNode } from "react";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { getUserAuthData } from "@/entities/User";

import { USER_DATA_KEY } from "@/shared/const/localStorage";

interface IRequireAuthProps {
  children: ReactNode;
}

const user = JSON.parse(localStorage.getItem(USER_DATA_KEY) || "{}");

export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
  const isUserAuth = Boolean(user?._id);
  const location = useLocation();

  if (!isUserAuth) {
    return <Navigate to="/login" state={{ location }} replace />;
  }

  return children;
};
