import { useNavigate } from "react-router-dom";

import { chatActions } from "@/entities/Chat/model/slice/chatSlice";
import { IChat } from "@/entities/Chat/model/types/chat";
import { User } from "@/entities/User";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { useFetchRecipientUser } from "@/shared/hooks/useFetchRecipient/useFetchRecipient";
import { DirectMessage } from "@/shared/ui/DirectMessage/DirectMessage";

interface IChatProps {
  chat: IChat;
  userData: User;
  isCurrent?: boolean;
  className?: string;
}

export const Chat = (props: IChatProps) => {
  const { chat, userData, isCurrent, className } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { recipientUser } = useFetchRecipientUser(chat, userData);

  const handleSetChat = () => {
    dispatch(chatActions.setChat(chat));
    navigate(`/chat/${recipientUser._id}`);
  };

  return (
    <DirectMessage
      handleClick={handleSetChat}
      name={recipientUser?.name}
      surname={recipientUser?.surname}
      className={isCurrent ? className : undefined}
    />
  );
};
