import { useQuery } from "@tanstack/react-query";
import { lettersQueryKeys } from "../services/queries/letters.queries";
import { listLettersRequest } from "../services/http/letters.http";
import { unwrapResponse } from "../../../shared/helpers/api-response";
import { mapLetters } from "../services/mappers/letter.mapper";

export const useLetters = () => {
  return useQuery({
    queryKey: lettersQueryKeys.all,
    queryFn: async () => mapLetters(unwrapResponse(await listLettersRequest())),
  });
};
