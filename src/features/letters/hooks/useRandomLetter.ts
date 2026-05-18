import { useQuery } from "@tanstack/react-query";
import { lettersQueryKeys } from "../services/queries/letters.queries";
import { getRandomLetterRequest } from "../services/http/letters.http";
import { unwrapResponse } from "../../../shared/helpers/api-response";
import { mapLetter } from "../services/mappers/letter.mapper";

export const useRandomLetter = () => {
  return useQuery({
    queryKey: lettersQueryKeys.random,
    queryFn: async () =>
      mapLetter(unwrapResponse(await getRandomLetterRequest())),
    refetchOnWindowFocus: false,
  });
};
