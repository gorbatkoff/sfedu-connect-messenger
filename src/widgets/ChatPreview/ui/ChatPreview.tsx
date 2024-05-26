import { useEffect } from "react";

import { Alert, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { ChatHeader } from "@/widgets/ChatPreview/ui/ChatHeader/ChatHeader";
import { ChatMessages } from "@/widgets/ChatPreview/ui/ChatMessages/ChatMessages";

import { ChatInput } from "@/features/ChatInput";

import { useLazyGetChatQuery } from "@/entities/Chat/api/getChat";
import { chatActions } from "@/entities/Chat/model/slice/chatSlice";
import { useLazyGetChatMessagesQuery } from "@/entities/Message/api/getMessages";
import { getMessages } from "@/entities/Messages/model/selectors/getMessages";
import { messagesActions } from "@/entities/Messages/model/slice/messagesSlice";
import { getUserAuthData } from "@/entities/User";
import { useLazyGetUserQuery } from "@/entities/User/api/getUser";

import styles from "./ChatPreview.module.scss";

export const ChatPreview = () => {
  const { pathname } = useLocation();
  const userId = pathname.split("/")[2];
  const dispatch = useDispatch();

  const userData = useSelector(getUserAuthData);
  const messages = useSelector(getMessages);

  const [trigger, { data, isLoading, error }] = useLazyGetUserQuery();
  const [getChat, { data: chatData }] = useLazyGetChatQuery();
  const [fetchMessages, { data: reqMessages }] = useLazyGetChatMessagesQuery();

  useEffect(() => {
    trigger({ userId: userId });

    if (userData?._id) {
      getChat({ firstId: userData._id, secondId: userId });
    }
  }, [getChat, trigger, userData, userId]);

  useEffect(() => {
    if (chatData?._id) {
      dispatch(chatActions.setChat(chatData));
    }
  }, [chatData, chatData?._id, dispatch]);

  useEffect(() => {
    if (chatData?._id) {
      fetchMessages({ chatId: chatData._id });
    }
  }, [chatData?._id, fetchMessages]);

  useEffect(() => {
    if (reqMessages) {
      dispatch(messagesActions.setMessages(reqMessages));
    }
  }, [dispatch, reqMessages]);

  if (isLoading) return <Spin />;
  if (error)
    return <Alert type="error" message="Error while fetching recipient" />;

  return (
    <>
      <section className={styles.chatPreview}>
        <ChatHeader recipient={data} />
        {messages && <ChatMessages messages={messages} />}
      </section>
      <ChatInput />
    </>
  );
};
