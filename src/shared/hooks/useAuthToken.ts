import { useCallback, useEffect, useState } from "react";
import {
  clearAccessToken,
  getAccessToken,
  setAccessToken,
} from "../helpers/auth-storage";

export const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(getAccessToken());
  }, []);

  const saveToken = useCallback((value: string) => {
    setAccessToken(value);
    setToken(value);
  }, []);

  const clearToken = useCallback(() => {
    clearAccessToken();
    setToken(null);
  }, []);

  return { token, saveToken, clearToken };
};
