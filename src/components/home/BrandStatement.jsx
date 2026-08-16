"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTypewriter } from "../../hooks/useTypewriter";

const STATEMENT = "We make eleven pieces a season. Nothing else.";

export default function BrandStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  const { displayed, done } = useTypewriter(STATEMENT, {
    speed: 38,
    start: isInView,
  });

  return (
    <section ref={ref} className="bg-paper px-8 py-24 text-center md:py-32">
      <p className="mx-auto max-w-3xl font-display text-3xl font-bold text-ink md:text-5xl">
        {displayed}
        <span
          aria-hidden="true"
          className={`ml-1 inline-block h-[0.8em] w-[3px] translate-y-[3px] bg-violet align-middle ${
            done ? "opacity-0" : "animate-pulse"
          }`}
        />
      </p>
    </section>
  );
}
