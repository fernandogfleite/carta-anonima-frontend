export type Guess = {
  id: number;
  letterId: number;
  guessedName: string;
  isCorrect: boolean;
  letterIsSolved: boolean;
  attemptsCount: number;
  createdAt: string;
};

export type GuessStats = {
  totalAttempts: number;
  correctAttempts: number;
  wrongAttempts: number;
  solvedLetters: number;
  pendingLetters: number;
  avgAttemptsToSolve?: number | null;
};
