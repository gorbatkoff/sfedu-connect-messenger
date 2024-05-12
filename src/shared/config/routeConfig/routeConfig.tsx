import { RouteProps } from "react-router-dom";

import { LoginPage } from "@/pages/LoginPage";

import { ChatPreview } from "@/widgets/ChatPreview/ui/ChatPreview";

import { RegisterForm } from "@/features/Registration";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  Default = "default",
  Channel = "channel",
  Chat = "chat",
  UserProfile = "user-profile",
  Profile = "profile",
  Login = "login",
  Register = "register",
  Unknown = "unknown",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Default]: "/",
  [AppRoutes.Channel]: "/channel/:id",
  [AppRoutes.Chat]: "/chat/:id",
  [AppRoutes.Profile]: "/profile",
  [AppRoutes.UserProfile]: "/profile/:id",
  [AppRoutes.Login]: "/login",
  [AppRoutes.Register]: "/register",
  [AppRoutes.Unknown]: "*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.Default]: {
    path: RoutePath.default,
    element: <h1>Default</h1>,
    authOnly: true,
  },
  [AppRoutes.Channel]: {
    path: RoutePath.channel,
    element: <ChatPreview />,
    authOnly: true,
  },
  [AppRoutes.Chat]: {
    path: RoutePath.chat,
    element: <ChatPreview />,
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
    element: <RegisterForm />,
    authOnly: false,
  },
  [AppRoutes.Unknown]: {
    path: RoutePath.unknown,
    element: (
      <h1>Мы искали но не нашли. Видимо такой страницы не существует</h1>
    ),
    authOnly: false,
  },
};
