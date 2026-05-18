import { httpClient } from "../../../../shared/services/http-client";
import type { ApiResponse } from "../../../../shared/helpers/api-response";
import type { AdminLetterUpdateDto } from "../dto/admin-letter-update.dto";

type AdminSummaryApi = {
  total_letters: number;
  revealed_letters: number;
  solved_letters: number;
  pending_letters: number;
  total_guesses: number;
};

type AdminLetterApi = {
  id: number;
  content: string;
  anonymous_hint?: string | null;
  is_revealed: boolean;
  created_at: string;
  sender_name: string;
};

export const getAdminSummaryRequest = async () => {
  const response =
    await httpClient.get<ApiResponse<AdminSummaryApi>>("/admin/summary");
  return response.data;
};

export const listAdminLettersRequest = async () => {
  const response =
    await httpClient.get<ApiResponse<AdminLetterApi[]>>("/admin/letters");
  return response.data;
};

export const updateAdminLetterRequest = async (
  letterId: number,
  payload: AdminLetterUpdateDto,
) => {
  const response = await httpClient.put<ApiResponse<AdminLetterApi>>(
    `/admin/letters/${letterId}`,
    payload,
  );
  return response.data;
};

export const deleteAdminLetterRequest = async (letterId: number) => {
  const response = await httpClient.delete<ApiResponse<{ deleted: boolean }>>(
    `/admin/letters/${letterId}`,
  );
  return response.data;
};
