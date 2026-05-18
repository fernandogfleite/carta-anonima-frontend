import { createGuessRequest } from "../http/guesses.http";
import type { GuessCreateDto } from "../dto/guess-create.dto";
import { unwrapResponse } from "../../../../shared/helpers/api-response";
import { mapGuess } from "../mappers/guess.mapper";

export const createGuessMutation = async (payload: GuessCreateDto) => {
  const response = await createGuessRequest(payload);
  return mapGuess(unwrapResponse(response));
};
