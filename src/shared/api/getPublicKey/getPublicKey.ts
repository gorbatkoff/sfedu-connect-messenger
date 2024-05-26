import { rtkApi } from "@/shared/api/rtkApi";

interface IPublicKey {
  publicKey: string;
}

const getPublicKey = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPublicKey: build.query<IPublicKey, void>({
      query: () => ({
        url: `/users/public-key`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const useGetPublicKeyQuery = getPublicKey.useGetPublicKeyQuery;
