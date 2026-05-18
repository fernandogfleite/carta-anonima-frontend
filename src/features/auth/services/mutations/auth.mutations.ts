import type { LoginDto } from "../dto/login.dto";
import { loginRequest } from "../http/auth.http";
import { unwrapResponse } from "../../../../shared/helpers/api-response";
import { mapAuthToken } from "../mappers/auth.mapper";

export const loginMutation = async (payload: LoginDto) => {
  const response = await loginRequest(payload);
  return mapAuthToken(unwrapResponse(response));
};
