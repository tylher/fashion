"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTypewriter } from "../../hooks/useTypewriter";

const STATEMENT = "We make eleven pieces a season. Nothing else.";

// Two bundles of five (four verticals + a diagonal strike) plus a single
// closing mark - eleven, counted the way a maker ticks off stock by hand.
const TALLY_MARKS = [
  { type: "v", x: 4 },
  { type: "v", x: 12 },
  { type: "v", x: 20 },
  { type: "v", x: 28 },
  { type: "d", x1: 0, y1: 32, x2: 34, y2: 6 },
  { type: "v", x: 46 },
  { type: "v", x: 54 },
  { type: "v", x: 62 },
  { type: "v", x: 70 },
  { type: "d", x1: 42, y1: 32, x2: 76, y2: 6 },
  { type: "v", x: 92 },
];

function TallyCount({ active, reduceMotion }) {
  return (
    <svg
      viewBox="0 0 100 40"
      className="mx-auto mt-8 h-7 w-auto md:h-12"
      aria-hidden="true"
    >
      {TALLY_MARKS.map((mark, i) => {
        const shared = {
          stroke: "currentColor",
          strokeWidth: 4,
          strokeLinecap: "round",
          initial: { pathLength: 0, opacity: 0 },
          animate: active
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 0, opacity: 0 },
          transition: {
            duration: reduceMotion ? 0 : 0.25,
            delay: reduceMotion ? 0 : 0.35 + i * 0.09,
          },
        };
        return mark.type === "v" ? (
          <motion.line
            key={i}
            x1={mark.x}
            y1={4}
            x2={mark.x}
            y2={36}
            {...shared}
          />
        ) : (
          <motion.line
            key={i}
            x1={mark.x1}
            y1={mark.y1}
            x2={mark.x2}
            y2={mark.y2}
            {...shared}
          />
        );
      })}
    </svg>
  );
}

export default function BrandStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduceMotion = useReducedMotion();

  const { displayed, done } = useTypewriter(STATEMENT, {
    speed: reduceMotion ? 0 : 38,
    start: isInView,
  });

  const tallyActive = reduceMotion ? isInView : done;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-paper px-5 pt-10 pb-6 text-center md:px-8 md:pb-8 md:pt-24"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[70%] md:top-[65%] -z-0 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[19rem] font-bold leading-none text-ink/[0.04] md:text-[35rem]"
      >
        11
      </span>

      <div className="relative z-10">
        <p className="mx-auto max-w-4xl font-display text-3xl font-bold leading-tight text-ink md:text-7xl">
          {reduceMotion ? STATEMENT : displayed}
          {!reduceMotion && (
            <span
              aria-hidden="true"
              className={`ml-1 inline-block h-[0.8em] w-[3px] translate-y-[3px] bg-violet align-middle ${
                done ? "opacity-0" : "animate-pulse"
              }`}
            />
          )}
        </p>

        <div className="text-ink/45">
          <TallyCount active={tallyActive} reduceMotion={reduceMotion} />
        </div>
      </div>
    </section>
  );
}