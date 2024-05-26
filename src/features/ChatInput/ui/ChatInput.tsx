import { ChangeEvent, useState } from "react";

import {
  FileAddOutlined,
  SendOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import classNames from "classnames";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useSelector } from "react-redux";

import { StateSchema } from "@/app/providers/StoreProvider";

import { useSendChatMessageMutation } from "@/entities/Message/api/getMessages";
import { messagesActions } from "@/entities/Messages/model/slice/messagesSlice";
import { newMessageActions } from "@/entities/NewMessage";
import { getUserAuthData } from "@/entities/User";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";

import styles from "./ChatInput.module.scss";

interface IChatInput {
  className?: string;
}

const supposedChat = window.location.pathname.slice("/chat/".length);

export const ChatInput = (props: IChatInput) => {
  const { className } = props;
  const [messageText, setMessageText] = useState("");
  const { chat } = useSelector((state: StateSchema) => state.chat);
  const userData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const [sendMessage] = useSendChatMessageMutation();

  const handleSetMessageText = (e: ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await handleSendMessage();
    }
  };

  const handleAddEmoji = ({ emoji }: EmojiClickData) => {
    setMessageText((prev) => `${prev} ${emoji}`);
  };

  const handleSendMessage = async () => {
    try {
      const chatId = chat?._id || supposedChat;

      if (!messageText) return;
      if (!chatId) return;
      if (!userData?._id) return;

      const response = await sendMessage({
        chatId: chatId,
        senderId: userData._id,
        text: messageText,
      });

      //@ts-ignore
      if (!response.data) throw new Error("error");

      //@ts-ignore
      dispatch(newMessageActions.setNewMessage(response.data));
      //@ts-ignore
      dispatch(messagesActions.addMessage(response.data));
      setMessageText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classNames([styles.chatParent, className])}>
      <div className={styles.filePicker}>
        <FileAddOutlined style={{ fontSize: "26px" }} disabled={true} />
      </div>
      <div className={styles.chatInput}>
        <Input
          placeholder="Напишите сообщение..."
          size="large"
          value={messageText}
          onKeyDown={handleKeyDown}
          onChange={handleSetMessageText}
          autoFocus={true}
        />
      </div>
      <div className={styles.emojiWrapper}>
        <Tooltip
          title={
            <EmojiPicker onEmojiClick={handleAddEmoji} lazyLoadEmojis={true} />
          }
          color="white"
          overlayInnerStyle={{ boxShadow: "none" }}
          trigger={["hover"]}
        >
          <SmileOutlined style={{ fontSize: "26px", color: "#08c" }} />
        </Tooltip>
      </div>
      <div>
        <SendOutlined
          onClick={handleSendMessage}
          style={{
            fontSize: "26px",
            color: "gray",
            marginLeft: "1em",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};
