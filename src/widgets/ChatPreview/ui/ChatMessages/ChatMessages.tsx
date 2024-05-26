import { useSelector } from "react-redux";

import { IMessage } from "@/entities/Message/model/types/message";
import { Message } from "@/entities/Message/ui/Message";
import { getUserAuthData } from "@/entities/User";

interface IChatMessagesProps {
  messages: IMessage[];
}

export const ChatMessages = (props: IChatMessagesProps) => {
  const { messages } = props;

  const userData = useSelector(getUserAuthData);

  return (
    <div>
      {messages.map((message) => {
        return (
          <Message
            message={message}
            key={message._id}
            isMessageOfCurrentUser={message.senderId === userData?._id}
          />
        );
      })}
    </div>
  );
};
