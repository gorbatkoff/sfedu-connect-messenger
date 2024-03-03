import { RouteProps } from "react-router-dom";

import { LoginPage } from "@/pages/LoginPage";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  Default = "default",
  UserProfile = "user-profile",
  Profile = "profile",
  Login = "login",
  Register = "register",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Default]: "/",
  [AppRoutes.Profile]: "/profile",
  [AppRoutes.UserProfile]: "/profile/:id",
  [AppRoutes.Login]: "/login",
  [AppRoutes.Register]: "/register",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.Default]: {
    path: RoutePath.default,
    element: <h1>Default</h1>,
    authOnly: true,
  },
  [AppRoutes.Profile]: {
    path: RoutePath.profile,
    element: <h1>Profile</h1>,
    authOnly: true,
  },
  [AppRoutes.UserProfile]: {
    path: RoutePath["user-profile"],
    element: <h1>SubUser profile</h1>,
    authOnly: true,
  },
  [AppRoutes.Login]: {
    path: RoutePath.login,
    element: <LoginPage />,
    authOnly: false,
  },
  [AppRoutes.Register]: {
    path: RoutePath.register,
    element: <h1>Register</h1>,
    authOnly: false,
  },
};
