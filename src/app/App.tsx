import { useSelector } from "react-redux";

import { AppLayout } from "@/app/layout/AppLayout";
import { StateSchema } from "@/app/providers/StoreProvider";

import { Counter } from "@/features/Counter";

import "./styles/index.scss";

export const App = () => {
  const count = useSelector((state: StateSchema) => state.counter.value);

  return (
    <AppLayout>
      <h1>{count}</h1>
      <Counter />
    </AppLayout>
  );
};
