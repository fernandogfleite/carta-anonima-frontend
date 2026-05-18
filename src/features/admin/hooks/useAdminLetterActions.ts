import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminQueryKeys } from "../services/queries/admin.queries";
import {
  deleteAdminLetterMutation,
  updateAdminLetterMutation,
} from "../services/mutations/admin.mutations";
import type { AdminLetterUpdateDto } from "../services/dto/admin-letter-update.dto";

export const useAdminLetterActions = () => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: ({
      letterId,
      payload,
    }: {
      letterId: number;
      payload: AdminLetterUpdateDto;
    }) => updateAdminLetterMutation(letterId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.letters });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (letterId: number) => deleteAdminLetterMutation(letterId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.letters });
    },
  });

  return { updateMutation, deleteMutation };
};
