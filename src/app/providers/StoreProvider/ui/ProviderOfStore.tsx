import { FC, ReactNode } from "react";

import { Provider } from "react-redux";

import { store } from "../config/store";

interface IStoreProvider {
  children: ReactNode;
}

export const ProviderOfStore: FC<IStoreProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
