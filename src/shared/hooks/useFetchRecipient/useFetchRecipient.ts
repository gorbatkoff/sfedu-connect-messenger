import { useEffect, useState } from "react";

import { IChat } from "@/entities/Chat/model/types/chat";
import { User } from "@/entities/User";

import { apiInstance } from "@/shared/api";

export const useFetchRecipientUser = (chat?: IChat, user?: User) => {
  const [recipientUser, setRecipientUser] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const recipientId = chat?.members.find((id: string) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;

      const response = await apiInstance.get(`/users/find/${recipientId}`);

      if (response.statusText !== "OK") setError("Error");

      setRecipientUser(response.data);
    };
    getUser();
  }, [recipientId]);

  return {
    recipientUser,
    error,
  };
};
