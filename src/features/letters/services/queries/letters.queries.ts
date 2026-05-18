export const lettersQueryKeys = {
  all: ["letters"] as const,
  detail: (letterId: number) => ["letters", "detail", letterId] as const,
  random: ["letters", "random"] as const,
};
