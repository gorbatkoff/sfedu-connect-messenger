import { IMessage } from "@/entities/Message/model/types/message";

import { rtkApi } from "@/shared/api/rtkApi";

interface IGetChatMessagesParams {
  chatId: string;
}

interface ISendChatMessageParams {
  chatId: string;
  text: string;
  senderId: string;
}

const getChatMessagesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getChatMessages: build.query<IMessage[], IGetChatMessagesParams>({
      query: ({ chatId }) => ({
        url: `/messages/${chatId}`,
      }),
    }),
    sendChatMessage: build.mutation<IMessage, ISendChatMessageParams>({
      query: (requestData) => ({
        url: `/messages`,
        body: requestData,
        method: "POST",
        cache: "no-cache",
      }),
    }),
  }),
  overrideExisting: false,
});

export const useLazyGetChatMessagesQuery =
  getChatMessagesApi.useLazyGetChatMessagesQuery;

export const useSendChatMessageMutation =
  getChatMessagesApi.useSendChatMessageMutation;
