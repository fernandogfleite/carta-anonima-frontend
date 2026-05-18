import { useMutation } from "@tanstack/react-query";
import { loginMutation } from "../services/mutations/auth.mutations";
import type { LoginDto } from "../services/dto/login.dto";
import { useAuthToken } from "../../../shared/hooks/useAuthToken";

export const useAdminLogin = () => {
  const { saveToken } = useAuthToken();

  return useMutation({
    mutationFn: (payload: LoginDto) => loginMutation(payload),
    onSuccess: (data) => {
      saveToken(data.accessToken);
    },
  });
};
