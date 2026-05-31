export type ToastType = "success" | "error" | "info";

export type ToastMessage = {
  id?: string;
  type: ToastType;
  title?: string;
  message: string;
};

type Listener = (toast: ToastMessage) => void;

const listeners = new Set<Listener>();

export const toastBus = {
  emit(toast: ToastMessage) {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : String(Date.now() + Math.random());
    listeners.forEach((listener) => listener({ id, ...toast }));
  },
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};
