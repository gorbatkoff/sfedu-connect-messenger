import { User } from "@/entities/User";

import { rtkApi } from "@/shared/api/rtkApi";

interface IGetUserProps {
  userId: string;
}

const getUserApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, IGetUserProps>({
      query: ({ userId }) => ({
        url: `/users/find/${userId}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const useLazyGetUserQuery = getUserApi.useLazyGetUserQuery;
