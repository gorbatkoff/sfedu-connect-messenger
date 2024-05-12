import { useEffect } from "react";

import { useSelector } from "react-redux";

import { StateSchema } from "@/app/providers/StoreProvider";

import { fetchChats } from "@/entities/Chat/model/services/fetchChats";
import { Chat } from "@/entities/Chat/ui/Chat";

import { USER_DATA_KEY } from "@/shared/const/localStorage";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

const user = JSON.parse(localStorage.getItem(USER_DATA_KEY) || "{}");

export const Chats = () => {
  const dispatch = useAppDispatch();

  const { chats } = useSelector((state: StateSchema) => state.chats);

  console.log(chats);

  useEffect(() => {
    dispatch(fetchChats({ userId: user._id }));
  }, [dispatch]);

  if (!chats.length) return null;

  return (
    <section>
      {chats.map((chat, index) => {
        return <Chat key={index} chat={chat} />;
      })}
    </section>
  );
};
