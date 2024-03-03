import { FC, ReactNode } from "react";

import { Navigate, useLocation } from "react-router-dom";

interface IRequireAuthProps {
  children: ReactNode;
}

export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
  const isUserAuth = true; // TODO доделать когда будет авторизация

  const location = useLocation();

  if (!isUserAuth) {
    return <Navigate to="/login" state={{ location }} replace />;
  }

  return children;
};
