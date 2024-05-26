import { User } from "@/entities/User";

import { rtkApi } from "@/shared/api/rtkApi";

const allUsersApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query<User[], void>({
      query: () => ({
        url: "/users",
      }),
    }),
  }),
  overrideExisting: false,
});

export const useLazyGetAllUsersQuery = allUsersApi.useLazyGetAllUsersQuery;
