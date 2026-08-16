"use client";

import { useEffect, useState } from "react";

/**
 * Reveals `text` one character at a time.
 * `start` gates the animation so it can wait for an image load or a
 * scroll-into-view trigger instead of firing on mount.
 */
export function useTypewriter(
  text,
  { speed = 45, startDelay = 0, start = true } = {},
) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return undefined;

    let index = 0;
    let interval;
    setDisplayed("");
    setDone(false);

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay, start]);

  return { displayed, done };
}
