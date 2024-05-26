import { useEffect } from "react";

import { useSelector } from "react-redux";

import { StateSchema } from "@/app/providers/StoreProvider";

import { fetchChats } from "@/entities/Chat/model/services/fetchChats";
import { Chat } from "@/entities/Chat/ui/Chat";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

import styles from "./Chats.module.scss";

export const Chats = () => {
  const dispatch = useAppDispatch();

  const { authData } = useSelector((state: StateSchema) => state.user);
  const { chats } = useSelector((state: StateSchema) => state.chats);
  const selectedChat = useSelector((state: StateSchema) => state.chat);

  useEffect(() => {
    if (!authData?._id) return;
    dispatch<any>(fetchChats({ userId: authData._id }));
  }, [authData?._id, dispatch]);

  if (!chats.length) return null;
  if (!authData) return <div>User not loaded...</div>;

  return (
    <section>
      {chats.map((chat) => {
        return (
          <Chat
            key={chat._id}
            chat={chat}
            userData={authData}
            isCurrent={chat._id === selectedChat.chat?._id}
            className={styles.currentChat}
          />
        );
      })}
    </section>
  );
};
