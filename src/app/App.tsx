import { AppLayout } from "@/app/layout/AppLayout";
import { Button } from "@/shared/ui/Button/Button";

import "./styles/index.scss";

export const App = () => {
  return (
    <AppLayout>
      <Button>Click me!</Button>
    </AppLayout>
  );
};
