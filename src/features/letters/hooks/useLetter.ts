import { useQuery } from "@tanstack/react-query";
import { lettersQueryKeys } from "../services/queries/letters.queries";
import { getLetterRequest } from "../services/http/letters.http";
import { unwrapResponse } from "../../../shared/helpers/api-response";
import { mapLetter } from "../services/mappers/letter.mapper";

export const useLetter = (letterId: number) => {
  return useQuery({
    queryKey: lettersQueryKeys.detail(letterId),
    queryFn: async () =>
      mapLetter(unwrapResponse(await getLetterRequest(letterId))),
    enabled: Number.isFinite(letterId),
  });
};
