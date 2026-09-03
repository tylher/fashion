"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useTypewriter } from "../../hooks/useTypewriter";

const HEADLINE = "Wear the story.";

// ─── More sublines to build depth ───────────────────────────────
const SUBLINES = [
  "Considered silhouettes, made in small batches.",
  "Cut, sewn, and finished at our own atelier.",
];

// ─── Rotating editorial images ──────────────────────────────────
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=80", // Coat, moody
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80", // Editorial flow
  "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80", // Dress movement
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&q=80", // Street style
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1600&q=80", // Outerwear detail
];

const subtextGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const subtextLine = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.45, duration: 0.8 },
  },
};

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // ─── Rotate images every 5 seconds ────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ─── Typewriter starts as soon as the first image is ready ────
  const { displayed: headline, done: headlineDone } = useTypewriter(HEADLINE, {
    speed: 55,
    startDelay: 300,
    start: imageLoaded,
  });

  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden bg-ink">
      {/* ─── Rotating Background Images ─────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGES[imageIndex]}
            alt="Editorial lookbook shot"
            className="h-full w-full object-cover"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ─── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 flex h-full max-w-3xl flex-col justify-center gap-6 px-8 md:px-16">
        <span className="eyebrow eyebrow-on-dark text-xs md:text-sm">
          Autumn collection
        </span>

        {/* Bigger on larger screens */}
        <h1 className="font-display text-4xl font-bold leading-[1.02] text-paper md:text-6xl lg:text-[95px] ">
          {headline}
          <span
            aria-hidden="true"
            className={`ml-1 inline-block h-[0.85em] w-[3px] translate-y-[2px] bg-coral align-middle ${
              headlineDone ? "opacity-0" : "animate-pulse"
            }`}
          />
        </h1>

        {/* Sublines — bigger and richer */}
        <motion.div
          className="flex flex-col gap-3"
          variants={subtextGroup}
          initial="hidden"
          animate={headlineDone ? "visible" : "hidden"}
        >
          {SUBLINES.map((line) => (
            <motion.p
              key={line}
              variants={subtextLine}
              className="max-w-lg font-body text-base text-paper/80 md:text-xl "
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* CTA — larger on big screens */}
        <motion.a
          type="button"
          className="btn btn-primary w-fit text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: headlineDone ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          href="/products#collection"
        >
          Shop the collection
          <FiArrowRight className="text-xl" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
