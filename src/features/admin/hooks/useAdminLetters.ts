import { useQuery } from "@tanstack/react-query";
import { adminQueryKeys } from "../services/queries/admin.queries";
import { listAdminLettersRequest } from "../services/http/admin.http";
import { unwrapResponse } from "../../../shared/helpers/api-response";
import { mapAdminLetters } from "../services/mappers/admin.mapper";

export const useAdminLetters = () => {
  return useQuery({
    queryKey: adminQueryKeys.letters,
    queryFn: async () =>
      mapAdminLetters(unwrapResponse(await listAdminLettersRequest())),
  });
};
