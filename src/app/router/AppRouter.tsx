import { Suspense } from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { AppLayout } from "@/app/layout/AppLayout";
import { RequireAuth } from "@/app/router/RequireAuth";

import {
  AppRouteProps,
  routeConfig,
} from "@/shared/config/routeConfig/routeConfig";

export const router = createBrowserRouter(
  createRoutesFromElements(
    Object.values(routeConfig).map((route: AppRouteProps) => {
      const element = route.authOnly ? (
        <AppLayout>
          <RequireAuth>{route.element}</RequireAuth>
        </AppLayout>
      ) : (
        route.element
      );

      return (
        <Route
          path={route.path}
          key={route.path}
          element={<Suspense fallback="Loading...">{element}</Suspense>}
        />
      );
    })
  )
);
