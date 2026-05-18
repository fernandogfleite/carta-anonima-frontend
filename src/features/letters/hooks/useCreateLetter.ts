import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLetterMutation } from "../services/mutations/letters.mutations";
import { lettersQueryKeys } from "../services/queries/letters.queries";
import type { LetterCreateDto } from "../services/dto/letter-create.dto";

export const useCreateLetter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: LetterCreateDto) => createLetterMutation(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: lettersQueryKeys.all });
    },
  });
};
