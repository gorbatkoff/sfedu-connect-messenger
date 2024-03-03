import { RouterProvider } from "react-router-dom";

import { router } from "@/app/router/AppRouter";

import "./styles/index.scss";

/*interface IAppProps {
  children: ReactNode;
}*/

export const App = () => {
  console.log(__API_URL__);

  return <RouterProvider router={router} />;
};
