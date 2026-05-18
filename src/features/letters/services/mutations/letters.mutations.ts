import { createLetterRequest } from "../http/letters.http";
import type { LetterCreateDto } from "../dto/letter-create.dto";
import { unwrapResponse } from "../../../../shared/helpers/api-response";
import { mapLetter } from "../mappers/letter.mapper";

export const createLetterMutation = async (payload: LetterCreateDto) => {
  const response = await createLetterRequest(payload);
  return mapLetter(unwrapResponse(response));
};
