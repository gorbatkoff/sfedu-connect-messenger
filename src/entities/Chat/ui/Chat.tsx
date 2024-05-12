import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { StateSchema } from "@/app/providers/StoreProvider";

import { chatActions } from "@/entities/Chat/model/slice/chatSlice";
import { IChat } from "@/entities/Chat/model/types/chat";
import { User } from "@/entities/User";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch/useAppDispatch";
import { useFetchRecipientUser } from "@/shared/hooks/useFetchRecipient/useFetchRecipient";
import { DirectMessage } from "@/shared/ui/DirectMessage/DirectMessage";

interface IChatProps {
  chat: IChat;
}

export const Chat = (props: IChatProps) => {
  const { chat } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { authData } = useSelector((state: StateSchema) => state.user);

  const { recipientUser } = useFetchRecipientUser(chat, authData);

  const handleSetChat = () => {
    dispatch(chatActions.setChat(chat));
    navigate(`/chat/${chat._id}`, {
      state: recipientUser as User,
    });
  };

  return (
    <DirectMessage
      handleClick={handleSetChat}
      name={recipientUser?.name}
      surname={recipientUser?.surname}
    />
  );
};
