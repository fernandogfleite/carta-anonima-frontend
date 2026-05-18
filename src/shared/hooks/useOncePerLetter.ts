import { useCallback, useEffect, useState } from "react";

const storageKey = (letterId: number) => `guess_${letterId}`;

export const useOncePerLetter = (letterId: number) => {
  const [hasGuessed, setHasGuessed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setHasGuessed(window.localStorage.getItem(storageKey(letterId)) === "1");
  }, [letterId]);

  const markGuessed = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(storageKey(letterId), "1");
    setHasGuessed(true);
  }, [letterId]);

  return { hasGuessed, markGuessed };
};
