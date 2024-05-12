import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "@/app/router/AppRouter";

import { fetchChats } from "@/entities/Chat/model/services/fetchChats";
import { userActions } from "@/entities/User";

import { apiInstance } from "@/shared/api";
import { USER_DATA_KEY } from "@/shared/const/localStorage";

import "./styles/index.scss";

/*interface IAppProps {
  children: ReactNode;
}*/

console.log(localStorage.getItem(USER_DATA_KEY));
const user = JSON.parse(localStorage.getItem(USER_DATA_KEY) || "{}");

export const App = () => {
  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    if (user._id) {
      dispatch(userActions.setAuthData(user));
    } else {
      console.log("user not authorized");
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
};
