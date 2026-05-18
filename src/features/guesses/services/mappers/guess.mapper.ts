import type { Guess, GuessStats } from "../models/guess";

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

export const mapGuess = (payload: GuessApiModel): Guess => ({
  id: payload.id,
  letterId: payload.letter_id,
  guessedName: payload.guessed_name,
  isCorrect: payload.is_correct,
  letterIsSolved: payload.letter_is_solved ?? false,
  attemptsCount: payload.attempts_count ?? 0,
  createdAt: payload.created_at,
});

export const mapGuessStats = (payload: GuessStatsApiModel): GuessStats => ({
  totalAttempts: payload.total_attempts,
  correctAttempts: payload.correct_attempts,
  wrongAttempts: payload.wrong_attempts,
  solvedLetters: payload.solved_letters,
  pendingLetters: payload.pending_letters,
  avgAttemptsToSolve: payload.avg_attempts_to_solve ?? null,
});
