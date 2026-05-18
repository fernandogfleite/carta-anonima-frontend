import { useQuery } from "@tanstack/react-query";
import { guessesQueryKeys } from "../services/queries/guesses.queries";
import { getGuessStatsRequest } from "../services/http/guesses.http";
import { unwrapResponse } from "../../../shared/helpers/api-response";
import { mapGuessStats } from "../services/mappers/guess.mapper";

export const useGuessStats = () => {
  return useQuery({
    queryKey: guessesQueryKeys.stats,
    queryFn: async () =>
      mapGuessStats(unwrapResponse(await getGuessStatsRequest())),
  });
};
