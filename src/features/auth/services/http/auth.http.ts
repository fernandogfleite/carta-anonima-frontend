import { httpClient } from "../../../../shared/services/http-client";
import type { ApiResponse } from "../../../../shared/helpers/api-response";
import type { LoginDto } from "../dto/login.dto";

type AuthApiModel = {
  access_token: string;
  token_type: string;
};

export const loginRequest = async (payload: LoginDto) => {
  const response = await httpClient.post<ApiResponse<AuthApiModel>>(
    "/auth/login",
    payload,
  );
  return response.data;
};
