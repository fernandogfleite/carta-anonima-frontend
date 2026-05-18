"use client";

import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
} from "@tanstack/react-query";
import { useState } from "react";
import { ToastProvider } from "../shared/components/ToastProvider";
import { toastBus } from "../shared/services/toast-bus";
import { parseApiError } from "../shared/helpers/api-error";

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            toastBus.emit({ type: "error", message: parseApiError(error) });
          },
        }),
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
          },
          mutations: {
            onError: (error) => {
              toastBus.emit({ type: "error", message: parseApiError(error) });
            },
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>
      <ToastProvider>{children}</ToastProvider>
    </QueryClientProvider>
  );
}
