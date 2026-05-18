import {
  deleteAdminLetterRequest,
  updateAdminLetterRequest,
} from "../http/admin.http";
import type { AdminLetterUpdateDto } from "../dto/admin-letter-update.dto";
import { unwrapResponse } from "../../../../shared/helpers/api-response";
import { mapAdminLetter } from "../mappers/admin.mapper";

export const updateAdminLetterMutation = async (
  letterId: number,
  payload: AdminLetterUpdateDto,
) => {
  const response = await updateAdminLetterRequest(letterId, payload);
  return mapAdminLetter(unwrapResponse(response));
};

export const deleteAdminLetterMutation = async (letterId: number) => {
  const response = await deleteAdminLetterRequest(letterId);
  return unwrapResponse(response);
};
