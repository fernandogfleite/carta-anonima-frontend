import type { AxiosError } from "axios";
import { ApiError } from "./api-response";

export const parseApiError = (error: unknown): string => {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (isAxiosError(error)) {
    const data = error.response?.data as ApiErrorResponse | undefined;
    return data?.error?.message ?? error.message ?? "Erro inesperado";
  }
  if (typeof error === "object" && error && "message" in error) {
    return String((error as { message?: string }).message ?? "Erro inesperado");
  }
  return "Erro inesperado";
};

const isAxiosError = (error: unknown): error is AxiosError => {
  return Boolean(error && typeof error === "object" && "isAxiosError" in error);
};

type ApiErrorResponse = {
  error?: {
    message?: string;
  };
};
