export type ApiErrorInfo = {
  code: string;
  message: string;
  details?: unknown;
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: ApiErrorInfo;
};

export class ApiError extends Error {
  code: string;
  details?: unknown;

  constructor(message: string, code = "api_error", details?: unknown) {
    super(message);
    this.code = code;
    this.details = details;
  }
}

export const unwrapResponse = <T>(payload: ApiResponse<T>): T => {
  if (!payload.success || payload.data === undefined) {
    throw new ApiError(
      payload.error?.message ?? "Erro inesperado",
      payload.error?.code,
      payload.error?.details,
    );
  }
  return payload.data;
};
