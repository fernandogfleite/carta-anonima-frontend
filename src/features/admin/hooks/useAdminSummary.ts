import { useQuery } from "@tanstack/react-query";
import { adminQueryKeys } from "../services/queries/admin.queries";
import { getAdminSummaryRequest } from "../services/http/admin.http";
import { unwrapResponse } from "../../../shared/helpers/api-response";
import { mapAdminSummary } from "../services/mappers/admin.mapper";

export const useAdminSummary = () => {
  return useQuery({
    queryKey: adminQueryKeys.summary,
    queryFn: async () =>
      mapAdminSummary(unwrapResponse(await getAdminSummaryRequest())),
  });
};
