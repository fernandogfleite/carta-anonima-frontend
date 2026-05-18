import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGuessMutation } from "../services/mutations/guesses.mutations";
import type { GuessCreateDto } from "../services/dto/guess-create.dto";
import { guessesQueryKeys } from "../services/queries/guesses.queries";

export const useCreateGuess = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: GuessCreateDto) => createGuessMutation(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: guessesQueryKeys.stats });
    },
  });
};
