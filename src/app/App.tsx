import { RouterProvider } from "react-router-dom";

import { router } from "@/app/router/AppRouter";

import "./styles/index.scss";

/*interface IAppProps {
  children: ReactNode;
}*/

export const App = () => {
  return <RouterProvider router={router} />;
};
