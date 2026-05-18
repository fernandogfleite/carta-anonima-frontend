import type { AuthToken } from "../models/auth-token";

type AuthApiModel = {
  access_token: string;
  token_type: string;
};

export const mapAuthToken = (payload: AuthApiModel): AuthToken => ({
  accessToken: payload.access_token,
  tokenType: payload.token_type,
});
