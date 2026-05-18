import { useCallback } from "react";
import {
  toastBus,
  type ToastMessage,
  type ToastType,
} from "../services/toast-bus";

export const useToast = () => {
  const push = useCallback(
    (message: string, type: ToastType = "info", title?: string) => {
      toastBus.emit({ message, type, title });
    },
    [],
  );

  return { push };
};
