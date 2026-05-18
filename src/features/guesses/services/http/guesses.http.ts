import { httpClient } from "../../../../shared/services/http-client";
import type { ApiResponse } from "../../../../shared/helpers/api-response";
import type { GuessCreateDto } from "../dto/guess-create.dto";

type GuessApiModel = {
  id: number;
  letter_id: number;
  guessed_name: string;
  is_correct: boolean;
  letter_is_solved?: boolean;
  attempts_count?: number;
  created_at: string;
};

type GuessStatsApiModel = {
  total_attempts: number;
  correct_attempts: number;
  wrong_attempts: number;
  solved_letters: number;
  pending_letters: number;
  avg_attempts_to_solve?: number | null;
};

export const createGuessRequest = async (payload: GuessCreateDto) => {
  const response = await httpClient.post<ApiResponse<GuessApiModel>>(
    "/guesses",
    payload,
  );
  return response.data;
};

export const getGuessStatsRequest = async () => {
  const response =
    await httpClient.get<ApiResponse<GuessStatsApiModel>>("/guesses/stats");
  return response.data;
};
