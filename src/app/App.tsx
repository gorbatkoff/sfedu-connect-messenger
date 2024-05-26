import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Socket, io } from "socket.io-client";

import { StateSchema } from "@/app/providers/StoreProvider";
import { router } from "@/app/router/AppRouter";

import { messagesActions } from "@/entities/Messages/model/slice/messagesSlice";
import { getNewMessage } from "@/entities/NewMessage";
import { IOnlineUser, onlineUsersActions } from "@/entities/OnlineUsers";
import { userActions } from "@/entities/User";

import { USER_DATA_KEY } from "@/shared/const/localStorage";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

import "./styles/index.scss";

const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY) || "{}");

export const App = () => {
  const dispatch = useAppDispatch();
  const [socket, setSocket] = useState<Socket | null>(null);

  const chat = useSelector((state: StateSchema) => state.chat.chat);
  const newMessage = useSelector(getNewMessage);

  console.log("chat :>>", chat);

  useEffect(() => {
    if (!userData?.id) {
      dispatch(userActions.setAuthData(userData));
    }
  }, [dispatch]);

  useEffect(() => {
    const newSocket = io("http://localhost:8000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [userData]);

  // add online users;
  useEffect(() => {
    if (!socket) return;

    socket.emit("addNewUser", userData?._id);
    socket.on("getOnlineUsers", (res: IOnlineUser[]) => {
      dispatch(onlineUsersActions.setOnlineUsers(res));
    });

    return () => {
      socket.off("getOnlineUsers");
    };
  }, [dispatch, socket]);

  // send message
  useEffect(() => {
    if (!socket) return;

    const recipientId = chat?.members.find(
      (member) => member !== userData?._id
    );

    socket.emit("sendMessage", { ...newMessage, recipientId });
  }, [dispatch, socket, newMessage]);

  // recieve message

  useEffect(() => {
    if (!socket) return;

    socket.on("getMessage", (res) => {
      if (chat?._id !== res.chatId) return;

      dispatch(messagesActions.addMessage(res));
    });

    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);

  return <RouterProvider router={router} />;
};
