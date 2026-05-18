export type Letter = {
  id: number;
  content: string;
  anonymousHint?: string | null;
  isRevealed: boolean;
  isSolved: boolean;
  solvedAt?: string | null;
  attemptsCount: number;
  createdAt: string;
  senderName?: string;
};
