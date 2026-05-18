import type { AdminLetter, AdminSummary } from "../models/admin";

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

export const mapAdminSummary = (payload: AdminSummaryApi): AdminSummary => ({
  totalLetters: payload.total_letters,
  revealedLetters: payload.revealed_letters,
  solvedLetters: payload.solved_letters,
  pendingLetters: payload.pending_letters,
  totalGuesses: payload.total_guesses,
});

export const mapAdminLetter = (payload: AdminLetterApi): AdminLetter => ({
  id: payload.id,
  content: payload.content,
  anonymousHint: payload.anonymous_hint ?? null,
  isRevealed: payload.is_revealed,
  createdAt: payload.created_at,
  senderName: payload.sender_name,
});

export const mapAdminLetters = (payload: AdminLetterApi[]) =>
  payload.map(mapAdminLetter);
