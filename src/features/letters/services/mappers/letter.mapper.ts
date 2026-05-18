import type { Letter } from "../models/letter";

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

export const mapLetter = (payload: LetterApiModel): Letter => ({
  id: payload.id,
  content: payload.content,
  anonymousHint: payload.anonymous_hint ?? null,
  isRevealed: payload.is_revealed,
  isSolved: payload.is_solved,
  solvedAt: payload.solved_at ?? null,
  attemptsCount: payload.attempts_count ?? 0,
  createdAt: payload.created_at,
  senderName: payload.sender_name,
});

export const mapLetters = (payloads: LetterApiModel[]): Letter[] =>
  payloads.map(mapLetter);
