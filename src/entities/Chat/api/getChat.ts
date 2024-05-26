import { IChat } from "@/entities/Chat/model/types/chat";

import { rtkApi } from "@/shared/api/rtkApi";

interface IGetChatParams {
  firstId: string;
  secondId: string;
}

const getChatApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getChat: build.query<IChat, IGetChatParams>({
      query: ({ firstId, secondId }) => ({
        url: `/chats/find/${firstId}/${secondId}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const useLazyGetChatQuery = getChatApi.useLazyGetChatQuery;
