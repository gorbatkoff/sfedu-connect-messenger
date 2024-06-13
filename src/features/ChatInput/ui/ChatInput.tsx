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

import { useGetPublicKeyQuery } from "@/shared/api/getPublicKey/getPublicKey";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { encryptData } from "@/shared/lib/encryptData/encryptData";

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
  const { data: publicKey } = useGetPublicKeyQuery();

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
      if (!publicKey?.publicKey) return;

      const encryptedMessage = await encryptData(
        messageText,
        publicKey.publicKey
      );
      const encryptedChatId = await encryptData(chatId, publicKey.publicKey);
      const encryptedSenderId = await encryptData(
        userData?._id,
        publicKey.publicKey
      );

      if (!encryptedMessage || !encryptedChatId || !encryptedSenderId) return;

      const response = await sendMessage({
        chatId: encryptedChatId,
        senderId: encryptedSenderId,
        text: encryptedMessage,
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
