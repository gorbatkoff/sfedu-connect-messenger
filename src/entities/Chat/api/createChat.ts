import { IChat } from "@/entities/Chat/model/types/chat";

import { rtkApi } from "@/shared/api/rtkApi";

interface ICreateChatParams {
  firstId: string;
  secondId: string;
}

const createChatApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    createChat: build.mutation<IChat, ICreateChatParams>({
      query: (data) => ({
        url: `/chats`,
        body: data,
        method: "POST",
      }),
    }),
  }),
  overrideExisting: false,
});

export const useCreateChatMutation = createChatApi.useCreateChatMutation;
