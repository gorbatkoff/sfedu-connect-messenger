import { useDispatch } from "react-redux";

import { counterActions } from "@/features/Counter";

export const Counter = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(counterActions.increment());
  };

  return <button onClick={handleClick}>Increase</button>;
};
