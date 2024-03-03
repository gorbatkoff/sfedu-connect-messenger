import { useDispatch } from "react-redux";

import { counterActions } from "@/features/Counter";

import { Button } from "@/shared/ui/Button/Button";

export const Counter = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(counterActions.increment());
  };

  return (
    <Button onClick={handleClick} variant="secondary">
      Increase
    </Button>
  );
};
