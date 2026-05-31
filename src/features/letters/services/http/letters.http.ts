import { httpClient } from "../../../../shared/services/http-client";
import type { LetterCreateDto } from "../dto/letter-create.dto";
import type { ApiResponse } from "../../../../shared/helpers/api-response";

type LetterApiModel = {
  id: number;
  content: string;
  anonymous_hint?: string | null;
  is_revealed: boolean;
  is_solved: boolean;
  solved_at?: string | null;
  attempts_count?: number;
  created_at: string;
  sender_name?: string;
};

export const createLetterRequest = async (payload: LetterCreateDto) => {
  const response = await httpClient.post<ApiResponse<LetterApiModel>>(
    "/letters",
    payload,
  );
  return response.data;
};

export const listLettersRequest = async () => {
  const response =
    await httpClient.get<ApiResponse<LetterApiModel[]>>("/letters");
  return response.data;
};

export const getLetterRequest = async (letterId: number) => {
  const response = await httpClient.get<ApiResponse<LetterApiModel>>(
    `/letters/${letterId}`,
  );
  return response.data;
};

export const getRandomLetterRequest = async () => {
  const response =
    await httpClient.get<ApiResponse<LetterApiModel>>("/letters/random");
  return response.data;
};
