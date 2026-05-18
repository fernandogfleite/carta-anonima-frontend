export type AdminSummary = {
  totalLetters: number;
  revealedLetters: number;
  solvedLetters: number;
  pendingLetters: number;
  totalGuesses: number;
};

export type AdminLetter = {
  id: number;
  content: string;
  anonymousHint?: string | null;
  isRevealed: boolean;
  createdAt: string;
  senderName: string;
};
